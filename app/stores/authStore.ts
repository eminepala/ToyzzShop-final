import { defineStore } from 'pinia'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, type User } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import type { IUser } from '~/types'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null,
        userData: null as IUser | null,
        loading: false,
        error: null as string | null
    }),
    actions: {
        initAuth() {
            onAuthStateChanged(auth, async (user) => {
                this.user = user
                if (user) {
                    const userDoc = await getDoc(doc(db, 'users', user.uid))
                    if (userDoc.exists()) {
                        this.userData = userDoc.data() as IUser
                    }
                } else {
                    this.userData = null
                }
            })
        },
        async login(email: string, pass: string) {
            this.loading = true
            this.error = null
            try {
                await signInWithEmailAndPassword(auth, email, pass)
            } catch (e: any) {
                this.error = e.message
            } finally {
                this.loading = false
            }
        },
        async register(email: string, pass: string, name: string) {
            this.loading = true
            this.error = null
            try {
                const cred = await createUserWithEmailAndPassword(auth, email, pass)
                const userData: IUser = {
                    uid: cred.user.uid,
                    email: email,
                    displayName: name,
                    isAdmin: false
                }
                await setDoc(doc(db, 'users', cred.user.uid), userData)
                this.userData = userData
            } catch (e: any) {
                this.error = e.message
            } finally {
                this.loading = false
            }
        },
        async logout() {
            await signOut(auth)
            this.user = null
            this.userData = null
        }
    }
})

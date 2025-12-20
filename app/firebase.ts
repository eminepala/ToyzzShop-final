import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAO6wFOQDHElm718Rb3FB8x1UNUACxY_P0",
    authDomain: "web-odev-8ffa6.firebaseapp.com",
    projectId: "web-odev-8ffa6",
    storageBucket: "web-odev-8ffa6.firebasestorage.app",
    messagingSenderId: "729453244278",
    appId: "1:729453244278:web:264cdd003072472c255457"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)

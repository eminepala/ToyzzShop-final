import type { IProduct } from '~/types'

export default defineEventHandler(async (event) => {
    const body = await readBody<IProduct>(event)

    // Simulate saving (just log it as it's in-memory per request usually unless using global var properly)
    // Note: To persist simply in memory across requests in dev mode, we could declare the var outside defineEventHandler in a separate file, 
    // but for this assignment "mock" is sufficient. 
    // We will just return the object with a mocked ID.

    const newProduct = {
        ...body,
        id: 'mock-' + Math.floor(Math.random() * 1000)
    }

    return newProduct
})

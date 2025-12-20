import type { IProduct } from '~/types'

// Mock In-Memory Database
const mockProducts: IProduct[] = [
    {
        id: 'mock-1',
        name: 'Remote Control Car (Mock)',
        price: 450,
        description: 'Fast remote control car for kids.',
        imageUrl: 'https://via.placeholder.com/200',
        categoryId: 'vehicles',
        stock: 5,
    },
    {
        id: 'mock-2',
        name: 'Building Blocks Set (Mock)',
        price: 320,
        description: 'Creative building blocks.',
        imageUrl: 'https://via.placeholder.com/200',
        categoryId: 'lego',
        stock: 10,
    }
]

export default defineEventHandler((event) => {
    return mockProducts
})

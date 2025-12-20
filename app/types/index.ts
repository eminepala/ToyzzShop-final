export interface IProduct {
    id?: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    categoryId: string;
    stock: number;
}

export interface ICategory {
    id?: string;
    name: string;
    slug: string;
}

export interface IUser {
    uid: string;
    email: string;
    displayName?: string;
    isAdmin: boolean;
}

export interface ICartItem {
    product: IProduct;
    quantity: number;
}

export interface IOrder {
    id?: string;
    userId: string;
    items: ICartItem[];
    total: number;
    createdAt: Date;
    status: 'pending' | 'completed' | 'cancelled';
}

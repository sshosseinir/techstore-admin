import type { Product } from '../types/product.types';

const BASE_URL = 'https://fakestoreapi.com';

export const productService = {
    async getProducts(): Promise<Product[]> {
        const response = await fetch(`${BASE_URL}/products`);

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        return response.json();
    },

    async getProductById(id: number): Promise<Product> {
        const response = await fetch(`${BASE_URL}/products/${id}`);

        if (!response.ok) {
            throw new Error('Failed to fetch product');
        }

        return response.json();
    },
};

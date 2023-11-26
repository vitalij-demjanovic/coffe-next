import { cache } from 'react';
import swell from '@/lib/swell/client';
import { GetProductsInput } from '@/lib/types/products';

export const getProducts = async ({
    page = 1,
    sort = '',
    search = '',
    categories = [],
    limit = 25
}: GetProductsInput) => {
    const query = {
        page,
        limit,
        sort,
        search,
        categories,
        expand: ['variants', 'categories']
    };

    return await swell.products.list(query);
};

export const getProductSlugOrId = async (slugOrID: string) => {
    return await swell.products.get(slugOrID);
};

export const listCategories = async (limit = 25, page = 1) => {
    return await swell.categories.list({
        limit,
        page,
        expand: ['products']
    });
};

export const sortMap = new Map([
    ['latest', ''],
    ['price-asc', 'price asc'],
    ['price-desc', 'price desc'],
    ['trending', 'popularity']
]);

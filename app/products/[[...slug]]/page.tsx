import Products from '../../components/Products/Products';
import Product from '@/app/components/Products/Product';
import {
    getProducts,
    getProductSlugOrId,
    listCategories,
    sortMap
} from '@/lib/swell/products';

export default async function Page({
    params
}: {
    params: { slug?: string[] };
}) {
    const { slug } = params;
    const productSlug = slug?.length === 1 && slug[0];
    const categorySlug = slug?.length === 2 && slug[1];

    if (productSlug) {
        const product = await getProductSlugOrId(productSlug);
        return <Product product={product} />;
    }

    const { results: products } = await getProducts({
        ...(categorySlug ? { categories: [categorySlug] } : {})
    });

    const stringSlug =
        categorySlug.toString().charAt(0).toUpperCase() +
        categorySlug.toString().slice(1);

    const { results: categories } = await listCategories();

    return (
        <div>
            <Products
                products={products}
                categoryName={`${stringSlug}`}
                categories={categories}
            />
        </div>
    );
}

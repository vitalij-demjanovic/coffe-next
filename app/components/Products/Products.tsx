import { getProducts, listCategories } from '@/lib/swell/products';
import ProductCard from '@/app/components/Products/ProductCard';
import Link from 'next/link';
import { Category, Product } from 'swell-js';
import SidebarCategories from '@/app/components/Products/SidebarCategories';

export default async function Products({
    products = [],
    categoryName,
    categories = []
}: {
    products: Product[];
    categoryName: string;
    categories?: Category[];
}) {
    return (
        <div className='container'>
            <div>
                <div className='flex py-20'>
                    <div className='w-[200px]'>
                        <SidebarCategories categories={categories} />
                    </div>
                    <div className='grid grid-cols-1 gap-10 lg:grid-cols-5'>
                        {products.map(product => (
                            <div key={product.id}>
                                <Link href={`/products/${product.id}`}>
                                    <ProductCard
                                        src={
                                            product.images?.[0]?.file?.url || ''
                                        }
                                        alt={product.name}
                                        price={product.price || 0}
                                        name={product.name}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

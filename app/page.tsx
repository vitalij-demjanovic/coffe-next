import Image from 'next/image';
import { listCategories } from '@/lib/swell/products';
import Link from 'next/link';

export default async function Page() {
    const { results: categories } = await listCategories();
    const mainCategories = categories
        .filter(c => c.parentId === null)
        .slice(0, 3);

    return (
        <section>
            <div className='container'>
                <div className='flex justify-between pt-5'>
                    <h2 className='pb-10 text-2xl font-bold tracking-tight'>
                        Shop by Category
                    </h2>
                    <Link
                        href={'/products'}
                        className='in text-blue-700 duration-300 ease-in hover:text-white'
                    >
                        Browse all products
                        <span aria-hidden='true'> &rarr;</span>
                    </Link>
                </div>
                <div className='flex justify-between'>
                    {mainCategories.map((category, index) => (
                        <div key={index} className='relative'>
                            <div className='hover:opacity-60'>
                                <Link href={'#'}>
                                    <Image
                                        src={
                                            category.images?.[0].file?.url || ''
                                        }
                                        alt={category.name}
                                        width={600}
                                        height={300}
                                        className='rounded-3xl'
                                    />
                                </Link>
                            </div>
                            <div className='absolute bottom-10 left-5 text-2xl font-semibold'>
                                <h3 className='font-semibold text-white'>
                                    <Link
                                        href={`/products/category/${category.slug}`}
                                    >
                                        <span className='absolute inset-0' />
                                        {category.name}
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

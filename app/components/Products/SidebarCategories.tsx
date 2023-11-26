import Link from 'next/link';
import NavLink from '@/app/components/ui/NavLink';
import swell from 'swell-js';

export default async function SidebarCategories({
    categories
}: {
    categories: swell.Category[];
}) {
    console.log(categories);

    return (
        <div>
            <form>
                <NavLink href='/products' className='text-base'>
                    All Categories
                </NavLink>
                <ul role='list' className='mt-4 space-y-4 text-sm'>
                    {categories
                        ?.filter(c => c.parentId === null)
                        .map(category => (
                            <li key={category.name}>
                                <NavLink
                                    href={`/products/category/${category.slug}`}
                                    className='text-base'
                                >
                                    {category.name}
                                </NavLink>
                                <ul className='mt-4 space-y-4 border-l border-stone-300 pl-4 text-sm'>
                                    {categories
                                        .filter(c => c.parentId === category.id)
                                        .map(c => (
                                            <li key={c.name}>
                                                <NavLink
                                                    href={`/products/category/${c.slug}`}
                                                    className='text-stone-500'
                                                >
                                                    {c.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                </ul>
                            </li>
                        ))}
                </ul>
            </form>
        </div>
    );
}

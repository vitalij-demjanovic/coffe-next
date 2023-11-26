import { Product } from 'swell-js';
import Link from 'next/link';

export default function NavigationPage({ name }: { name: string }) {
    return (
        <div className='mb-10'>
            <Link
                className='in text-blue-700 duration-300 ease-in hover:text-white'
                href={'/products'}
            >
                Products
            </Link>
            &nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;<span>{name}</span>
        </div>
    );
}

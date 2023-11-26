import ThemeButton from '@/app/components/ui/ThemeButton';
import ShopinggCartButton from '@/app/components/ui/ShopinggCartButton';
import UserAvatarButton from '@/app/components/ui/UserAvatarButton';
import Link from 'next/link';

export default function Header() {
    return (
        <header className='p-4'>
            <nav className='container flex items-center justify-between'>
                <h1 className='text- text-2xl font-bold'>
                    <Link href={'/'}>CAFE</Link>
                </h1>
                <div>
                    <Link href={'/products'} className='uppercase'>
                        Products
                    </Link>
                </div>
                <div className='flex items-center'>
                    <ThemeButton />
                    <ShopinggCartButton />
                    <UserAvatarButton />
                </div>
            </nav>
        </header>
    );
}

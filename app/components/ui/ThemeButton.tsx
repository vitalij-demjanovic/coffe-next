'use client';
import { useTheme } from 'next-themes';
import Moon from '../../../public/images/moon.png';
import Sun from '../../../public/images/sun.png';
import Image from 'next/image';

export default function ThemeButton() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            className='mr-3'
            onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
        >
            {resolvedTheme === 'light' ? (
                <Image src={Moon} alt={'moon'} width={20} />
            ) : (
                <Image src={Sun} alt={'sun'} width={20} />
            )}
        </button>
    );
}

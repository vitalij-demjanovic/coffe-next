'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const ShoppingCartButton = () => {
    return (
        <button className='relative flex items-center gap-x-2 rounded-lg px-1.5 py-1 hover:bg-stone-100 dark:hover:bg-stone-700'>
            <ShoppingCartIcon className='h-7 w-7 text-stone-600 dark:text-stone-400' />
        </button>
    );
};

export default ShoppingCartButton;

'use client';

import { Product } from 'swell-js';
import Image from 'next/image';
import NavigationPage from '@/app/components/NavigationPage';
import { useState } from 'react';

export type ExtendedProduct = Product;

export default function Product({ product }: { product: ExtendedProduct }) {
    const [item, setItem] = useState(0);
    const floatNumber = (parse: any) => {
        return parseFloat(String(parse)).toFixed(2);
    };

    return (
        <div className='container py-20'>
            <div className='grid grid-cols-1 justify-between md:grid-cols-2'>
                <div>
                    <NavigationPage name={product.name} />
                    {product.sale === true && (
                        <div className='mb-3 inline-block rounded-sm bg-[#f5428d] p-1 text-xs uppercase'>
                            sale
                        </div>
                    )}
                    <h1 className='text-3xl'>{product.name}</h1>
                    <div
                        className='mb-20 pt-5'
                        dangerouslySetInnerHTML={{
                            __html: product?.description || ''
                        }}
                    />
                    <div className='flex flex-col'>
                        <span className='text-2xl'>
                            {floatNumber(product.price)}$
                        </span>
                        {product.sale === true && (
                            <span className='text-xl font-thin line-through'>
                                {floatNumber(product.origPrice)}$
                            </span>
                        )}
                    </div>
                </div>
                <div>
                    <div className='flex items-end justify-end pt-10  md:pt-0'>
                        <Image
                            src={product.images?.[item]?.file?.url || ''}
                            alt={product.name}
                            width={0}
                            height={0}
                            sizes='100vh'
                            style={{
                                width: '80%',
                                height: 'auto',
                                objectFit: 'cover'
                            }}
                            className='mb-10 rounded-lg'
                        />
                    </div>
                    <div className='flex justify-end'>
                        {product.images?.map((image, index) => (
                            <Image
                                key={index}
                                src={image?.file?.url || ''}
                                alt={product.name}
                                width={100}
                                height={0}
                                className='mb-20 ml-3 cursor-pointer rounded-lg'
                                onClick={() => setItem(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

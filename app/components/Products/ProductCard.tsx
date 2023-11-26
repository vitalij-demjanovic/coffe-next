import Image from 'next/image';

interface ProductI {
    src: string;
    alt: string;
    price: number;
    name: string;
}
export default function ProductCard({ src, alt, name, price }: ProductI) {
    return (
        <div className='max-w-[200px]'>
            <Image
                src={src}
                alt={alt}
                width={200}
                height={0}
                className='h-[180px] rounded-lg duration-200 ease-in hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-amber-50'
            />
            <div className='flex justify-between py-3'>
                <p className='max-w-[80%] text-sm text-gray-500'>{name}</p>
                <span>{price}$</span>
            </div>
        </div>
    );
}

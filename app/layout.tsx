import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Good Coffee',
    description: 'Coffee & Equipment shop'
};

import { Providers } from '@/app/providers';
import Header from '@/app/components/layout/Header';

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Providers>
                    <Header />
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}

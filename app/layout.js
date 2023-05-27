import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { default: "Marty's Cyberware Shop | MC", template: '%s | MC' },
  description:
    'This shop sells cyberware to improve the Body you are sleeved to',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">Home</Link> <Link href="/products">Products</Link>{' '}
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}

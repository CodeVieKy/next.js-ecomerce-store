import './globals.scss';
import '../CookieBanner';
import { Orbitron } from 'next/font/google';
import Link from 'next/link';
import { CookieBanner } from '../CookieBanner';
import style from './layout.module.scss';

const orbitron = Orbitron({ subsets: ['latin'] });

export const metadata = {
  title: { default: "Marty's Cyberware Shop | MC", template: '%s | MC' },
  description:
    'This shop sells cyberware to improve the Body you are sleeved to',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <CookieBanner />
        <nav className={style.navigator}>
          <Link href="/">Home</Link> <Link href="/products">Products</Link>{' '}
          <Link href="/about">About</Link>
          <Link href="/cart">Cart</Link>
          {Math.floor(Math.random() * 10)}
        </nav>
        {children}
      </body>
    </html>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

export const metadata = {
  title: { default: 'Products | MC', template: '%s | MC' },
  description: 'These are our Products',
};

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main>
      These are our Products
      {products.map((products) => {
        return (
          <div key={`product-div-${products.id}`}>
            <Link href={`/products/${products.id}`}>{products.name}</Link>
            <Image
              src={`/images/${products.name}.png`}
              width={100}
              height={100}
              alt={''}
            />
          </div>
        );
      })}
    </main>
  );
}

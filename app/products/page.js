import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

export const metadata = {
  title: { default: 'Products | MC', template: '%s | MC' },
  description: 'These are our Products',
};

export default function ProductsPage() {
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

/* export default function ProductsPage() {
  return <main>DE OPRESSO LIBRE</main>;
}
*/

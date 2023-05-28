import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: { default: 'Products | MC', template: '%s | MC' },
  description: 'These are our Products',
};

const products = [
  {
    id: 1,
    name: 'Vulture full Robotic Arm',
    type: 'prosthesis',
    object: 'arm',
  },
  {
    id: 2,
    name: 'Vulture Robotic forearm',
    type: 'prosthesis',
    object: 'forearm',
  },
  { id: 3, name: 'Makeshift Robotic leg', type: 'prosthesis', object: 'leg' },
  { id: 4, name: 'Makeshift Robotic foot', type: 'prosthesis', object: 'foot' },
  { id: 5, name: 'Aero full Robotic lung', type: 'internals', object: 'lung' },
  { id: 6, name: 'Eagle full Robotic eye', type: 'internals', object: 'eye' },
  {
    id: 7,
    name: 'Beat full Robotic heart',
    type: 'internals',
    object: 'heart',
  },
  {
    id: 8,
    name: 'Load full Robotic spine',
    type: 'internals',
    object: 'spine',
  },
  {
    id: 9,
    name: 'Rex full Robotic Brain',
    type: 'prosthesis',
    object: 'brain',
  },
];

export default function ProductsPage() {
  return (
    <main>
      These are our Products
      {products.map((products) => {
        return (
          <div key={`product-div-${products.id}`}>
            <Link href={`/products/${products.name}`}>{products.name}</Link>
            <Image
              src={`/images/${products.name}.png`}
              width={100}
              height={100}
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

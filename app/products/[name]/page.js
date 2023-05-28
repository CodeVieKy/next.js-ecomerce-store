import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '../../../database/products';

export default function ProductPage({ params }) {
  const singleProduct = products.find(
    (product) => product.name === params.name,
  );

  console.log(singleProduct);
  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <h1>{params.name}</h1>
      <Image src={`/images/${params.name}.png`} width={200} height={200} />
    </main>
  );
}

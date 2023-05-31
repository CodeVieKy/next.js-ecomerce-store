import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';

export const dynamic = 'force-dynamic';

export default function ProductPage({ params }) {
  const singleProduct = getProductById(Number(params.productId));

  console.log(singleProduct);
  // if (!singleProduct) {
  //  notFound();
  // }

  return (
    <main>
      <h1>{singleProduct.name}</h1>
      <Image
        src={`/images/${singleProduct.name}.png`}
        width={200}
        height={200}
        alt={''}
      />
      This is a carrying
    </main>
  );
}

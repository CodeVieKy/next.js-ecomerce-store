import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById, products } from '../../../database/products';
import { getCookie } from 'next/headers';
import ProductCommentBox from './ProductCommentBox';

export const dynamic = 'force-dynamic';

export default function ProductPage({ params }) {
  const singleProduct = getProductById(Number(params.productId));
  // This is how I use cookies
  // const allCookies = cookies().get(whateverweneed);

  // console.log(whateverweneed.value;

  console.log(singleProduct);
  if (!singleProduct) {
    notFound();
  }

  const productCommentsCookie = getCookie('productComments');
  const productComments = !productCommentsCookie
    ? []
    : parseJson(productCommentsCookie);
  const productToUpdate = productComments.find((productComment) => {
    return productComment.id === products.id;
  });

  return (
    <main>
      <h1>{singleProduct.name}</h1>
      {productToUpdate.comment}
      <Image
        src={`/images/${singleProduct.name}.png`}
        width={200}
        height={200}
        alt={''}
      />
      This is a {singleProduct.type} which replaces your {singleProduct.object}
      <h1>
        {singleProduct.id} {singleProduct.name}
      </h1>
      <ProductCommentBox productId={singleProduct.id} />;
    </main>
  );
}

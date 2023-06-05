'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateComment(productId, comment) {
  //  const allCookies = cookies().get(whateverweneed);

  // 1. get  the current cookie
  const productCommentsCookie = getCookie('productComments');
  console.log(JSON.parse(productCommentsCookie.value));
  // 2. we parse the cookie
  const productComments = !productCommentsCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the productComment inside
      []
    : parseJson(productCommentsCookie);
  // we edit the object
  // We get the object for the product in the cookies or undefined
  const productToUpdate = productComments.find((productComment) => {
    return productComment.id === productId;
  });
  // case B: the cookie is defined but have the product in the action
  // if we are in product 1
  // [{id:1, comment:"abc"}]
  if (productToUpdate) {
    // we need to update the productComment
    productToUpdate.comment = comment;
  } else {
    // case C: the cookie is defined but does not have the fruit in the action
    // if we are in fruit 1
    // [{id:2, comment:"abc"}]
    productComments.push({
      // we need insert the productComment
      id: productId,
      comment,
    });
  }
  // 3 we edit the object
  // 4 we override the cookie
  await cookies().set('productComments', JSON.stringify(productComments));
}

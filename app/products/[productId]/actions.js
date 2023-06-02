'use server';

import { cookies } from 'next/headers';

export async function createOrUpdateComment(productId, comment) {
  //  const allCookies = cookies().get(whateverweneed);
  await cookies().set(
    'ProductComments',
    JSON.stringify([{ id: productId, comment: comment }]),
  );
}

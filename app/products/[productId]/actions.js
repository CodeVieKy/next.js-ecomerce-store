'use server';

import { cookies } from 'next/headers';

export async function createOrUpdateComment() {
  const allCookies = cookies().get(whateverweneed);

  console.log('trigger');
  console.log(whateverweneed.value);
}

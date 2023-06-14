import { cache } from 'react';
import { sql } from './connect';

// server side code only run in server components
// import fs from 'node:fs';

// fs.readFile('../app/page.js', () => {});

/* export const products = [
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
  {
    id: 3,
    name: 'Makeshift Robotic leg',
    type: 'prosthesis',
    object: 'leg   ',
  },
  {
    id: 4,
    name: 'Makeshift Robotic foot',
    type: 'prosthesis',
    object: 'foot   ',
  },
  {
    id: 5,
    name: 'Aero full Robotic lung',
    type: 'internals',
    object: 'lung   ',
  },
  {
    id: 6,
    name: 'Eagle full Robotic eye',
    type: 'internals',
    object: 'eye   ',
  },
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

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
} */

type product = {
  id: number;
  name: string;
  type: string;
  object: string | null;
};

export const getProducts = cache(async () => {
  const products = await sql<product[]>`
  SELECT * FROM products
  `;
  return products;
});

export const getProductById = cache(async (id: number) => {
  const [products] = await sql<product[]>`
    SELECT
      *
    FROM
     products
    WHERE
    id = ${id}
`;
  return products;
});

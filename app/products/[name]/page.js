import Image from 'next/image';

export default function ProductPage({ params }) {
  console.log(params);
  return (
    <main>
      <h1>{params.name}</h1>
      <Image src={`/images/${params.name}.png`} width={200} height={200} />
    </main>
  );
}

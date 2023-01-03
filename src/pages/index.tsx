import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Stripe from 'stripe';

import camisa1 from '../assets/camisas/1.png';
import camisa2 from '../assets/camisas/2.png';
import camisa3 from '../assets/camisas/3.png';
import { stripe } from '../lib/stripe';
import { HomeContainer, Product } from '../styles/pages/home';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: HomeProps) {
  console.log(products);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product className="keen-slider__slide" key={product.id}>
          <Image src={product.imageUrl} width={520} height={480} alt="" />

          <footer>
            <strong>{product.name}</strong>
            <span>{product.name}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = res.data.map((product) => {
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: (product.default_price as Stripe.Price).unit_amount! / 100,
    };
  });

  console.log(res.data);

  return {
    props: { products },
  };
};

import { useRouter } from 'next/router';
import React from 'react';

import { ImageContainer, ProductContainer, ProductDetail } from '../../styles/pages/product';

const Product = () => {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetail>
        <h1>Camisa X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officiis
          porro tempore ipsum nobis aspernatur voluptatem error inventore
          corporis quam vitae rem reiciendis, explicabo facere debitis natus
          iusto pariatur. Rerum.
        </p>
        <button>Comprar agora</button>
      </ProductDetail>
    </ProductContainer>
  );
};

export default Product;

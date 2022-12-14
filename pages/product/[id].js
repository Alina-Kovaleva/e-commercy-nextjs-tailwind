import Link from 'next/link';
import React, { useContext } from 'react';
import Wrapper from '../../components/Wrapper';
import ReactStars from 'react-stars';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Store } from '../../utils/Store';

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return {
    props: { product },
  };
};

export default function ProductScreen({ product }) {
  const { state, dispatch } = useContext(Store);
  console.log('product', product);

  if (!product) {
    return <Wrapper title="Product Not Found">Product Not Found</Wrapper>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((i) => i.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };

  return (
    <Wrapper title={product.title}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-3 md:gap-3">
        <div className="md:col-span-2">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-lg h-auto rounded-lg"
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg font-bold">{product.title}</h1>
            </li>
            <li className="italic">{product.category}</li>
            <li className="flex items-center">
              <ReactStars
                value={product.rating.rate}
                size={25}
                color2={'#ffd700'}
                edit={false}
              />
              <a>({product.rating.count} customer reviews)</a>
            </li>
            <svg
              class="mb-2 col-start-1 col-span-full w-full h-px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path d="M0,0 100,0" stroke="#707070" stroke-width="1"></path>
            </svg>
            <li>
              <div className="tracking-wider font-bold">
                About this product{' '}
              </div>
              <p className="tracking-wide mt-2 mb-5">{product.description}</p>
            </li>
            <svg
              class="mb-2 col-start-1 col-span-full w-full h-px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path d="M0,0 100,0" stroke="#707070" stroke-width="1"></path>
            </svg>
            <li className="flex justify-between mb-2">
              <div>Total: </div>
              <div>€{product.price}</div>
            </li>
            <svg
              class="mb-2 col-start-1 col-span-full w-full h-px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path d="M0,0 100,0" stroke="#707070" stroke-width="1"></path>
            </svg>
            <li className="flex justify-end">
              <button className="primary-button" onClick={addToCartHandler}>
                <span className="flex flex-row justify-start items-center h-3.2 xl:h-4">
                  <ShoppingCartIcon className="w-6 text-center" />
                  Add to cart
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

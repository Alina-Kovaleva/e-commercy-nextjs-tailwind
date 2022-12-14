import React, { useContext } from 'react';
import Link from 'next/link';
import { Store } from '../utils/Store';

export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(Store);
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((i) => i.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };
  return (
    <div className="card">
      <div className="flex items-center justify-center pt-2">
        <Link href={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="object-contain max-h-80"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">{product.title}</h2>
        </Link>
        <p className="mb-2">{product.category}</p>
        <p>€{product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

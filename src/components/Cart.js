import React from 'react';
import { BsFillCartFill } from "react-icons/bs";

function Cart({ cartTotal, setCartItem }) {
  function handleCartItem() {
    setCartItem(0);
  }

  return (
    <div>
      <button className="cart-container" onClick={handleCartItem}>
        <BsFillCartFill className="cart" />
        <span id="cart-number">{cartTotal}</span>
      </button>
    </div>
  );
}

export default Cart;

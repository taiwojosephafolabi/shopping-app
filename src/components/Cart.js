import React from 'react';
import { BsFillCartFill } from "react-icons/bs";

function Cart({ cartItem, setCartItem }) {
  function handleCartItem() {
    setCartItem(0);
    console.log("Cart Total Reset Button CLICKED")
  }

  return (
    <div>
      <button className="cart-container" onClick={handleCartItem}>
        <BsFillCartFill className="cart" />
        <span id="cart-number">{cartItem}</span>
      </button>
    </div>
  );
}

export default Cart;

import React from 'react';
import { BsFillCartFill } from "react-icons/bs";

function Cart({ cartItem, setCartItem, cartTotal, setCartTotal }) {
  function handleCartItem() {
    setCartItem(0);
    console.log("Cart Total Reset Button CLICKED")
  }

  return (
    <div>
      <button className="cart-container" onClick={handleCartItem}>
        <BsFillCartFill className="cart" />
        <span id="cart-number">{cartItem}</span>
        <span id="cart-number">£{cartTotal}</span>
      </button>
    </div>
  );
}

export default Cart;

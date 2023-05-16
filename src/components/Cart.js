import React from "react";
import { BsFillCartFill } from "react-icons/bs";

function Cart({ showCartPage, cartItem, cartTotal }) {
  return (
    <div>
      <button className="cart-container" onClick={showCartPage}>
        <BsFillCartFill className="cart" />
        <span id="cart-number">{cartItem}</span>
        <span id="cart-number">£{cartTotal}</span>
      </button>
    </div>
  );
}

export default Cart;

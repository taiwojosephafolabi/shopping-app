import React from "react";
import { BsFillCartFill } from "react-icons/bs";

function Cart({ showCartPage, cartTotal, cartTotalPrice }) {
  return (
    <div>
      <button className="cart-container" onClick={showCartPage}>
        <BsFillCartFill className="cart" />
        <span id="cart-number">{cartTotal}</span>
        <span id="cart-number">£{cartTotalPrice}</span>
      </button>
    </div>
  );
}

export default Cart;

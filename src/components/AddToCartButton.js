import React from "react";

function CartButton({ AddToCart }) {
  return (
    <div>
      <button className="add-to-cart-btn" onClick={AddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default CartButton;

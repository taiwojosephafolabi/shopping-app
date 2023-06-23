import React from "react";

function CartButton({ AddToCart }) {
  return (
    <div>
      <button className="button" onClick={AddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default CartButton;

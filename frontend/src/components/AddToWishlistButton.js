import React from "react";

function WishlistButton({ AddToWishlist }) {
  return (
    <div>
      <button className="button" onClick={AddToWishlist}>
        Add To Wishlist
      </button>
    </div>
  );
}

export default WishlistButton;

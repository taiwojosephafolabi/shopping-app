import React from "react";

function WishlistButton({ AddToWishlist }) {
  return (
    <div>
      <button className="add-to-wishlist-btn" onClick={AddToWishlist}>
        Add To Wishlist
      </button>
    </div>
  );
}

export default WishlistButton;

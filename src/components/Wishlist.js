import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

function Wishlist({ wishlistItem, setWishlistItem }) {
  function handleWishlistItem() {
    setWishlistItem(0);
    console.log("Wishlist Total Reset Button CLICKED")
  }
  return (
    <div>
      <button className="wishlist-container" onClick={handleWishlistItem}>
        <BsFillHeartFill className="wishlist" />
        <span id="wishlist-number">{wishlistItem}</span>
      </button>
    </div>
  );
}

export default Wishlist;

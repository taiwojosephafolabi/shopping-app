import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

function Wishlist({ wishlistTotal, setWishlistItem }) {
  function handleWishlistItem() {
    setWishlistItem(0);
  }
  return (
    <div>
      <button className="wishlist-container" onClick={handleWishlistItem}>
        <BsFillHeartFill className="wishlist" />
        <span id="wishlist-number">{wishlistTotal}</span>
      </button>
    </div>
  );
}

export default Wishlist;

import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

function Wishlist({ showWishlistPage, wishlistItem }) {
  return (
    <div>
      <button className="wishlist-container" onClick={showWishlistPage}>
        <BsFillHeartFill className="wishlist" />
        <span id="wishlist-number">{wishlistItem}</span>
      </button>
    </div>
  );
}

export default Wishlist;

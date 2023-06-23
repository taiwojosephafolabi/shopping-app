import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

function Wishlist({ showWishlistPage, wishlistTotalItems }) {
  return (
    <div>
      <button className="wishlist-container" onClick={showWishlistPage}>
        <BsFillHeartFill className="wishlist" />
        <span id="wishlist-number">{wishlistTotalItems}</span>
      </button>
    </div>
  );
}

export default Wishlist;

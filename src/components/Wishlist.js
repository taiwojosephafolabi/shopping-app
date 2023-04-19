import { BsFillHeartFill } from "react-icons/bs";

function Wishlist(props) {
  function handleWishlistItem() {
    props.setWishlistItem(0);
  }
  return (
    <div>
      <button className="wishlist-container" onClick={handleWishlistItem}>
        <BsFillHeartFill className="wishlist" />
        <span id="wishlist-number">{props.wishlistTotal}</span>
      </button>
    </div>
  );
}

export default Wishlist;

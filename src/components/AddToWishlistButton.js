function WishlistButton(props) {
  return (
    <div>
      <button className="add-to-wishlist-btn" onClick={props.AddToWishlist}>
        Add To Wishlist
      </button>
    </div>
  );
}

export default WishlistButton;

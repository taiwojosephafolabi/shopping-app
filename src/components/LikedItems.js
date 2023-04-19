import CartButton from "./AddToCartButton";
import WishlistButton from "./AddToWishlistButton";

function LikedItems(props) {
  return (
    <div className="container">
      {props.items.map((itemsData, index) => (
        <div key={index} className="liked-item">
          <h4> {itemsData.name} </h4>
          <img className="image" src={itemsData.image} alt="ImageItem" />
          <h6> Liked on: {itemsData.likedDate}</h6>
          <span class="button-container">
            <CartButton AddToCart={props.AddToCart} />
            <WishlistButton AddToWishlist={props.AddToWishlist} />
          </span>
        </div>
      ))}
    </div>
  );
}

export default LikedItems;

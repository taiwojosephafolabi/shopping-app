import OverviewButton from "./OverviewButton";
import CartButton from "./AddToCartButton";
import WishlistButton from "./AddToWishlistButton";
import DeleteButton from "./DeleteButton";

function Products({
  items,
  OverviewProduct,
  AddToWishlist,
  AddToCart,
  DeleteProduct,
}) {
  return (
    <div className="container">
      {items.map((itemsData, index) => {
        return (
          <div className="liked-item" key={index}>
            <h4> {itemsData.name} </h4>
            <img className="image" src={itemsData.image} alt={itemsData.name} />
            <h6> Added on: {itemsData.addedDate}</h6>
            <span className="button-container">
              <OverviewButton OverviewProduct={OverviewProduct} />
              <WishlistButton AddToWishlist={AddToWishlist} />
              <CartButton AddToCart={AddToCart} />
              <DeleteButton
                DeleteProduct={(event) => DeleteProduct(itemsData.id)}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Products;

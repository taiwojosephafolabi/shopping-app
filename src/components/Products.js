import React from "react";
import OverviewButton from "./OverviewButton";
import CartButton from "./AddToCartButton";
import WishlistButton from "./AddToWishlistButton";
import DeleteButton from "./DeleteButton";

function Products({
  items,
  data,
  OverviewProduct,
  AddToWishlist,
  AddToCart,
  DeleteProduct,
}) {
  return (
    <div className="container">
      {items.map((data, index) => {
        return (
          <div className="liked-item" key={index}>
            <h4> {data.name} </h4>
            <img className="image" src={data.image} alt={data.name} />
            <h6> Added on: {data.addedDate}</h6>
            <span className="button-container">
              <OverviewButton OverviewProduct={OverviewProduct} />
              <WishlistButton AddToWishlist={AddToWishlist} />
              <CartButton AddToCart={AddToCart} />
              <DeleteButton
                DeleteProduct={(event) => DeleteProduct(data.id)}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Products;

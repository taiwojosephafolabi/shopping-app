import React from "react";
import OverviewButton from "./OverviewButton";
import CartButton from "./AddToCartButton";
import WishlistButton from "./AddToWishlistButton";
import DeleteButton from "./DeleteButton";

function Products({
  showProductOverviewPage,
  search,
  data,
  AddToWishlist,
  AddToCart,
  DeleteProduct,
}) {
  return (
    <div className="container">
      {data
        .filter((data) => {
          return search.toLowerCase() === ""
            ? data
            : data.name.toLowerCase().includes(search);
        })
        .map((data, index) => {
          return (
            <div className="liked-item" key={index}>
              <h4> {data.name} </h4>
              <img className="image" src={data.image} alt={data.name} />
              <h6> Added on: {data.addedDate}</h6>
              <h5> Price: £{data.price}</h5>
              <span className="button-container">
                <OverviewButton
                  showProductOverviewPage={() => showProductOverviewPage(data)}
                />
                <WishlistButton AddToWishlist={AddToWishlist} />
                <CartButton AddToCart={() => AddToCart(data)} />
                <DeleteButton DeleteProduct={() => DeleteProduct(data.id)} />
              </span>
            </div>
          );
        })}
    </div>
  );
}

export default Products;

import React from "react";
import OverviewButton from "./OverviewButton";
import CartButton from "./AddToCartButton";
import WishlistButton from "./AddToWishlistButton";

function Products({
  showProductOverviewPage,
  search,
  data,
  AddToWishlist,
  AddToCart,
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
            <div className="product-card" key={index}>
              <h4> {data.name} </h4>
              <img className="image" src={data.image} alt={data.name} />
              <h5> Price: £{data.price}</h5>
              <span className="button-container">
                <OverviewButton
                  showProductOverviewPage={() => showProductOverviewPage(data)}
                />
                <WishlistButton AddToWishlist={() => AddToWishlist(data)} />
                <CartButton AddToCart={() => AddToCart(data)} />
              </span>
            </div>
          );
        })}
    </div>
  );
}

export default Products;

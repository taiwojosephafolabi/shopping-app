import React from "react";
import NavbarComp from "./NavbarComp";
import Categories from "./Categories";
import { productsData } from "../data/data";

function ProductOverviewPage({
  backToLandingPage,
  showHomePage,
  data,
  wishlistItem,
  setWishlistItem,
  cartItem,
  setCartItem,
  cartTotal,
  setCartTotal,
}) {
  return (
    <div className="App">
      <NavbarComp
        backToLandingPage={backToLandingPage}
        showHomePage={showHomePage}
        wishlistItem={wishlistItem}
        setWishlistItem={setWishlistItem}
        cartItem={cartItem}
        setCartItem={setCartItem}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />

      <Categories />
      <h1 className="heading">Product Overview</h1>
      <span className="button-container">
      <button type="button" className="button" onClick={() => showHomePage()}>
        Back to Home
      </button>
      </span>
      <div className="container">
      {data
        .filter((data) => {
          return productsData.id === data.id
            ? data
            : data.id;
        })
        .map((data, index) => {
          return (
            <div className="liked-item" key={index}>
              <h4> {data.name} </h4>
              <img className="image" src={data.image} alt={data.name} />
              <h6> Added on: {data.addedDate}</h6>
              <h5> Price: £{data.price}</h5>
              </div>
          );
        })}
        </div>
    </div>
  );
}

export default ProductOverviewPage;

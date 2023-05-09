import React from "react";
import NavbarComp from "./NavbarComp";
import Categories from "./Categories";

function ProductOverviewPage({
   backToLandingPage, showHomePage, wishlistItem, setWishlistItem, cartItem, setCartItem }) {
  return (
    <div className="App">
      <NavbarComp
        backToLandingPage={backToLandingPage}
        showHomePage={showHomePage}
        wishlistItem={wishlistItem}
        setWishlistItem={setWishlistItem}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
      
      <Categories />
      <h1 className="heading">Product Overview</h1>
    </div>
  );
}

export default ProductOverviewPage;

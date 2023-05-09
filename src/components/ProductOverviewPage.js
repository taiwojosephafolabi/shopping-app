import React from "react";
import NavbarComp from "./NavbarComp";
import Categories from "./Categories";

function ProductOverviewPage({
  backToLandingPage,
  showHomePage,
  wishlistItem,
  setWishlistItem,
  cartItem,
  setCartItem,
  cartTotal,
  setCartTotal
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
      <button type="button" className="back-btn" onClick={() => showHomePage()}>
        Back to Home
      </button>
    </div>
  );
}

export default ProductOverviewPage;

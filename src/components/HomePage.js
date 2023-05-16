import React from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import Products from "./Products";
import Footer from "./Footer";

function HomePage({
  showHomePage,
  backToLandingPage,
  showWishlistPage,
  showCartPage,
  search,
  setSearch,
  data,
  cartItem,
  setCartItem,
  cartTotal,
  setCartTotal,
  wishlistItem,
  setWishlistItem,
  showProductOverviewPage,
  AddToCart,
  AddToWishlist,
  DeleteProduct,
}) {
  return (
    <div className="App">
      <Navbar
        backToLandingPage={backToLandingPage}
        showHomePage={showHomePage}
        showWishlistPage={showWishlistPage}
        showCartPage={showCartPage}
        search={search}
        setSearch={setSearch}
        wishlistItem={wishlistItem}
        setWishlistItem={setWishlistItem}
        cartItem={cartItem}
        setCartItem={setCartItem}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />

      <Categories />

      <h1 className="heading">Items</h1>

      <Products
        showProductOverviewPage={(event) => showProductOverviewPage(event)}
        wishlistItem={wishlistItem}
        search={search}
        cartItem={cartItem}
        cartTotal={cartTotal}
        items={data}
        data={data}
        AddToCart={AddToCart}
        AddToWishlist={(event) => AddToWishlist(wishlistItem)}
        DeleteProduct={(event) => DeleteProduct(event)}
      />
      <Footer />
    </div>
  );
}

export default HomePage;

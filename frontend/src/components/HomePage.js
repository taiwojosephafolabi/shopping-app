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
  showProductOverviewPage,

  search,
  setSearch,

  data,

  wishlistTotalItems,
  setWishlistTotalItems,
  AddToWishlist,

  cartTotal,
  setCartTotal,
  cartTotalPrice,
  setCartTotalPrice,
  AddToCart,

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
        wishlistTotalItems={wishlistTotalItems}
        setWishlistTotalItems={setWishlistTotalItems}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        cartTotalPrice={cartTotalPrice}
        setCartTotalPrice={setCartTotalPrice}
      />

      <Categories />

      <h1 className="heading">Items</h1>

      <Products
        showProductOverviewPage={(event) => showProductOverviewPage(event)}
        search={search}
        wishlistITotaltems={wishlistTotalItems}
        cartTotal={cartTotal}
        cartTotalPrice={cartTotalPrice}
        data={data}
        AddToCart={AddToCart}
        AddToWishlist={AddToWishlist}
      />
      <Footer />
    </div>
  );
}

export default HomePage;

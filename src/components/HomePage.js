import React from "react";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer";
import Categories from "./Categories";
import Products from "./Products";

function HomePage({
  showHomePage,
  backToLandingPage,
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
      <NavbarComp
        backToLandingPage={backToLandingPage}
        showHomePage={showHomePage}
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
        AddToCart={(event) => AddToCart(cartItem)}
        AddToWishlist={(event) => AddToWishlist(wishlistItem)}
        DeleteProduct={(event) => DeleteProduct(event)}
      />
      <Footer />
    </div>
  );
}

export default HomePage;

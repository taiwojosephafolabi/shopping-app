import React from "react";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer";
import Categories from "./Categories";
import Products from "./Products";

function HomePage({
  showHomePage,
  backToLandingPage,
  items,
  data,
  cartItem,
  setCartItem,
  cartTotal,
  wishlistItem,
  setWishlistItem,
  showProductOverviewPage,
  AddToCart,
  AddToWishlist,
  DeleteProduct,
}) {

  console.log("CHECK 3: ", data);

  return (
    <div className="App">
      <NavbarComp
        cartItem={cartItem}
        setCartItem={setCartItem}
        wishlistItem={wishlistItem}
        setWishlistItem={setWishlistItem}
        backToLandingPage={backToLandingPage}
        showHomePage={showHomePage}
      />

      <Categories />

      <h1 className="heading">Items</h1>

      <Products
        items={data}
        data={data}
        cartItem={cartItem}
        showProductOverviewPage={(event) => showProductOverviewPage(event)}
        AddToCart={(event) => AddToCart(cartItem)}
        wishlistItem={wishlistItem}
        AddToWishlist={(event) => AddToWishlist(wishlistItem)}
        DeleteProduct={(event) => DeleteProduct(event)}
      />
      <Footer />
    </div>
  );
}

export default HomePage;

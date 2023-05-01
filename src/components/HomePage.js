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
  OverviewProduct,
  AddToCart,
  AddToWishlist,
  DeleteProduct,
}) {

  console.log("CHECK 3: ", items);

  return (
    <div className="App">
      <NavbarComp
        cartTotal={cartItem}
        setCartItem={setCartItem}
        wishlistTotal={wishlistItem}
        setWishlistItem={setWishlistItem}
        backToLandingPage={backToLandingPage}
        showHomePage={showHomePage}
      />

      <Categories />

      <h1 className="heading">Items</h1>

      <Products
        items={data}
        data={data}
        cartTotal={cartItem}
        OverviewProduct={(event) => OverviewProduct(event)}
        AddToCart={(event) => AddToCart(cartTotal)}
        wishlistTotal={wishlistItem}
        AddToWishlist={(event) => AddToWishlist(wishlistItem)}
        DeleteProduct={(event) => DeleteProduct(event)}
      />
      <Footer />
    </div>
  );
}

export default HomePage;

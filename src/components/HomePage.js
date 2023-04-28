import React from "react";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer";
import Categories from "./Categories";
import Products from "./Products";

function HomePage({
  productsData,
  items,
  cartItem,
  setCartItem,
  wishlistItem,
  setWishlistItem,
  data,
  OverviewProduct,
  AddToCart,
  AddToWishlist,
  DeleteProduct,
  sameTypeProducts,
}) {
  return (
    <div className="App">
      <NavbarComp
        cartTotal={cartItem}
        setCartItem={setCartItem}
        wishlistTotal={wishlistItem}
        setWishlistItem={setWishlistItem}
      />

      <Categories />

      <h1 className="heading">Items</h1>

      <Products
        items={data}
        sameTypeProducts={sameTypeProducts}
        OverviewProduct={(event) => OverviewProduct(event)}
        AddToCart={(event) => AddToCart(cartItem)}
        AddToWishlist={(event) => AddToWishlist(wishlistItem)}
        DeleteProduct={(event) => DeleteProduct(event)}
      />
      <Footer />
    </div>
  );
}

export default HomePage;

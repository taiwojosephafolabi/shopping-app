import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import ProductOverviewPage from "./components/ProductOverviewPage";
import WishlistPage from "./components/WishlistPage";
import CartPage from "./components/CartPage";

import { productsData } from "./data/data";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("Landing Page");
  const [search, setSearch] = useState("");
  const [wishlistTotalItems, setWishlistTotalItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [data, setData] = useState(productsData);
  const [cartData, setCartData] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);
  const [overviewData, setOverviewData] = useState([]);

  const showHomePage = () => {
    setPage("Home Page");
    overviewData.pop();
  };

  const backToLandingPage = () => {
    setPage("Landing Page");
    // clear overviewData state to nothing
  };

  const showProductOverviewPage = (item) => {
    setPage("Overview Product Page");
    // State did not work - CHECK
    // setOverviewData(item);
    overviewData.push(item);
    console.log("OVERVIEW ITEM: ", item);
    console.log("PRODUCT: ", overviewData);

    // get id
    // pass overviewData data to productOverviewPage
  };

  const showWishlistPage = () => {
    setPage("Wishlist Page");
  };

  const showCartPage = () => {
    setPage("Cart Page");
  };

  const AddToWishlist = (item) => {
    // State did not work - CHECK
    // setWishlistData(item);
    wishlistData.push(item);
    console.log("ITEM ADDED TO WISHLIST: ", item);
    setWishlistTotalItems(wishlistTotalItems + 1);
    console.log("WISHLIST:", wishlistData);
  };

  const AddToCart = (item) => {
    // State did not work - CHECK
    // setCartData(item);
    cartData.push(item);
    console.log("ITEM ADDED TO CART: ", item);
    setCartTotal(cartTotal + 1);
    setTotalPrice(totalPrice + item.price);
    console.log("CART:", cartData);
  };

  const DeleteProduct = (event) => {
    console.log("clicked");
    console.log(event);

    const filterProduct = (product) => {
      if (product.id !== event) {
        return product;
      }
    };
    const result = data.filter(filterProduct);
    setData(result);
    console.log("Item deleted!");
  };

  let currentPage;
  if (page === "Landing Page") {
    currentPage = <LandingPage showHomePage={showHomePage} />;
  } else {
    if (page === "Home Page") {
      currentPage = (
        <HomePage
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
          cartTotalPrice={totalPrice}
          setCartTotalPrice={setTotalPrice}
          data={data}
          showProductOverviewPage={showProductOverviewPage}
          AddToCart={AddToCart}
          AddToWishlist={AddToWishlist}
          DeleteProduct={() => DeleteProduct()}
        />
      );
    } else if (page === "Overview Product Page") {
      currentPage = (
        <ProductOverviewPage
          showHomePage={showHomePage}
          overviewData={overviewData}
        />
      );
    } else if (page === "Cart Page") {
      currentPage = (
        <CartPage
          backToLandingPage={backToLandingPage}
          showHomePage={showHomePage}
          cartData={cartData}
        />
      );
    } else if (page === "Wishlist Page") {
      currentPage = (
        <WishlistPage
          backToLandingPage={backToLandingPage}
          showHomePage={showHomePage}
          wishlistData={wishlistData}
        />
      );
    } else {
      currentPage = <div>ERROR! PAGE NOT FOUND</div>;
    }
  }
  return <div className="App">{currentPage}</div>;
}

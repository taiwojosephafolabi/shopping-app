import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import ProductOverviewPage from "./components/ProductOverviewPage";

import {productsData} from "./data/data"
import "./App.css";

export default function App() {
  const [page, setPage] = useState("Landing Page");
  const [search, setSearch] = useState('');
  const [wishlistItem, setWishlistItem] = useState(0);
  const [cartItem, setCartItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState(productsData);
  const [cartData, setCartData] = useState([]);
  const [overviewData, setOverviewData] = useState();

  const showHomePage = () => {
    setPage("Home Page");

  };

  const backToLandingPage = () => {
    setPage("Landing Page");
    // clear overviewData state to nothing
  };

  const showProductOverviewPage = (item) => {
    setPage("Overview Product Page");
    console.log("OVERVIEW ITEM: ", item);
    // get id
    // pass overviewData data to productOverviewPage
  };

  const AddToWishlist = (item) => {
    setWishlistItem(item + 1);
    console.log("Item added to wishlist!");
  };

  const AddToCart = (item) => {
    console.log("ITEM ADDED TO CART: ", item);
    // setCartData(cartData.push(item));
    setTotalPrice(totalPrice + item.price);
    setCartItem(cartItem + 1);
    console.log("Item added to cart!");
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
    currentPage = (
      <LandingPage
        showHomePage={showHomePage}
      />
    );
  } else {
    if (page === "Home Page") {
      currentPage = (
        <HomePage
          backToLandingPage={backToLandingPage}
          showHomePage={showHomePage}
          search={search}
          setSearch={setSearch}
          wishlistItem={wishlistItem}
          setWishlistItem={setWishlistItem}
          cartItem={cartItem}
          setCartItem={setCartItem}
          cartTotal={totalPrice}
          setCartTotal={setTotalPrice}
          data={data}
          items={data}
          showProductOverviewPage={showProductOverviewPage}
          AddToCart={AddToCart}
          AddToWishlist={(event) => AddToWishlist(wishlistItem)}
          DeleteProduct={(event) => DeleteProduct(event)}
        />
      );
    } else if (page === "Overview Product Page") {
      currentPage = (
        <ProductOverviewPage
          showHomePage={showHomePage}
          overviewData={overviewData}
        />
      );
    } else {
      currentPage = <div>ERROR! PAGE NOT FOUND</div>;
    }
  }
  return <div className="App">{currentPage}</div>;
}

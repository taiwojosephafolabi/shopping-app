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
  const [cartTotal, setCartTotal] = useState(0);
  const [data, setData] = useState(productsData);
  const [cartData, setCartData] = useState([]);

  const showHomePage = () => {
    setPage("Home Page");
  };

  const backToLandingPage = () => {
    setPage("Landing Page");
  };

  const showProductOverviewPage = () => {
    setPage("Overview Product Page");
  };

  const AddToWishlist = (item) => {
    setWishlistItem(item + 1);
    console.log("Item added to wishlist!");
  };

  const AddToCart = (item) => {
    setCartItem(item + 1);
    if(cartData.includes(item)){
      item.quantity += 1;
    } else {
      // item.quantity = 1;
      cartData.push(item);
      setCartData(cartData);
      console.log("CART: ", cartData)
    }
    // setCartTotal(item + data.reduce((prev, cur) => {
    //   return prev + cur.price
    // }), 0);
    // console.log({setCartTotal});
    console.log("Item added to cart!");
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
        showProductOverviewPage={showProductOverviewPage}
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
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          data={data}
          items={data}
          showProductOverviewPage={showProductOverviewPage}
          AddToCart={(event) => AddToCart(cartItem)}
          AddToWishlist={(event) => AddToWishlist(wishlistItem)}
          DeleteProduct={(event) => DeleteProduct(event)}
        />
      );
    } else if (page === "Overview Product Page") {
      currentPage = (
        <ProductOverviewPage
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
          data={data}
          items={data}
          AddToCart={(event) => AddToCart(cartItem)}
          AddToWishlist={(event) => AddToWishlist(wishlistItem)}
          DeleteProduct={(event) => DeleteProduct(event)}
        />
      );
    } else {
      currentPage = <div>ERROR!</div>;
    }
  }
  return <div className="App">{currentPage}</div>;
}

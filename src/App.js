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
    setOverviewData([]);
  };

  const backToLandingPage = () => {
    setPage("Landing Page");
    // clear overviewData state to nothing
  };

  const showProductOverviewPage = (item) => {
    setPage("Overview Product Page");
    // State did not work - CHECK
    // setOverviewData(item);
    setOverviewData([...overviewData, item]);
    // overviewData.push(item);
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

  // const wishlists = [];

  const AddToWishlist = (item) => {
    // State did not work - CHECK
    // wishlists.push(item);
    setWishlistData([...wishlistData, item]);

    console.log("ITEMS: ", item);
    // wishlistData.push(item);
    console.log("ITEM ADDED TO WISHLIST: ", item);
    setWishlistTotalItems(wishlistTotalItems + 1);
    console.log("WISHLIST:", wishlistData);
  };

  console.log("STATE: ", wishlistData);

  const AddToCart = (item) => {
    if (page === "Home Page") {
      setCartData([...cartData, item]);
      setCartTotal(cartTotal + 1);
      setTotalPrice(Number(totalPrice + Number(item.price)));
    }

    else if (page === "Wishlist Page") {
      const filterProduct = (product) => {
        if (product.id !== item.id) {
          return product;
        } else {
          setWishlistTotalItems(wishlistTotalItems - 1);
        }
      };
      const result = wishlistData.filter(filterProduct);
      wishlistData.push(result);
      setWishlistData(result);

      setCartData([...cartData, item]);
      
      setCartTotal(cartTotal + 1);
      setTotalPrice(Number(totalPrice + Number(item.price)));
    }
    console.log("ITEM ADDED TO CART: ", item);
  };

  const DeleteProduct = (event) => {
    if (page === "Wishlist Page") {
      const filterProduct = (product) => {
        if (product.id !== event) {
          return product;
        } else {
          setWishlistTotalItems(wishlistTotalItems - 1);
        }
      };
      const result = wishlistData.filter(filterProduct);
      wishlistData.push(result);
      setWishlistData(result);
    } else if (page === "Cart Page") {
      const filterProduct = (product) => {
        if (product.id !== event) {
          return product;
        } else {
          setTotalPrice(Number(totalPrice - product.price));
          setCartTotal(cartTotal - 1);
        }
      };

      const result = cartData.filter(filterProduct);
      cartData.push(result);
      setCartData(result);
    }

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
          DeleteProduct={DeleteProduct}
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
          cartTotalPrice={totalPrice}
          setCartTotalPrice={setTotalPrice}
          cartData={cartData}
          cartTotal={cartTotal}
          DeleteProduct={DeleteProduct}
        />
      );
    } else if (page === "Wishlist Page") {
      currentPage = (
        <WishlistPage
          backToLandingPage={backToLandingPage}
          showHomePage={showHomePage}
          wishlistData={wishlistData}
          AddToCart={AddToCart}
          DeleteProduct={DeleteProduct}
        />
      );
    } else {
      currentPage = <div>ERROR! PAGE NOT FOUND</div>;
    }
  }
  return <div className="App">{currentPage}</div>;
}

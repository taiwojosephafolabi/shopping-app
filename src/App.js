import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import ProductOverviewPage from "./components/ProductOverviewPage";

// import NavbarComp from "./components/NavbarComp";
// import Footer from "./components/Footer";
// import Categories from "./components/Categories";
// import Products from "./components/Products";

import { v4 as uuid } from "uuid";
import "./App.css";

export default function App() {
  const productsData = [
    {
      id: uuid(),
      name: "Children Of Blood And Bone - Tomi Adeyemi",
      image: "https://m.media-amazon.com/images/I/61Zxem3qIIL._SL500_.jpg",
      addedDate: "25-12-2021",
    },
    {
      id: uuid(),
      name: "The Golden Compass - Phillip Pullman",
      image:
        "https://1.bp.blogspot.com/-FmVt32Oomxw/T4hDo_cO-sI/AAAAAAAAAD8/4PwXbtvZ4Sc/s1600/gc.jpg",
      addedDate: "12-02-2011",
    },
    {
      id: uuid(),
      name: "Eye of the Wolf - Daniel Pennac",
      image:
        "https://m.media-amazon.com/images/I/51--SmriPXL._SX400_BO1,204,203,200_.jpg",
      addedDate: "04-10-2014",
    },
    {
      id: uuid(),
      name: "Eragon - Chrisopher Paolini",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/ce/Eragon_book_cover.png",
      addedDate: "29-04-2006",
    },
    {
      id: uuid(),
      name: "Diary of a Wimpy Kid",
      image:
        "https://toppsta.com/images/covers/4/9/0/6/9780141324906.webp?t=1644290789",
      addedDate: "15-09-2009",
    },
    {
      id: uuid(),
      name: "Taking Up Space - The Black Girl's Manifesto for Change - Chelsea Kwakye & Ore Ogunbiyi",
      image:
        "https://cdn.waterstones.com/bookjackets/large/9781/5291/9781529118544.jpg",
      addedDate: "06-09-2019",
    },
    {
      id: uuid(),
      name: "Canon EOS M50 Mark II Camera Body",
      image:
        "https://i1.adis.ws/i/canon/eos-m50-mark-ii_range-page_be49ca9dbc354c03a09cdd0fd898d92a",
      addedDate: "11-01-2023",
    },
    {
      id: uuid(),
      name: "DJI Osmo Mobile 3",
      image: "https://m.media-amazon.com/images/I/61CB0Ey932L._AC_SL1100_.jpg",
      addedDate: "30-10-2022",
    },
    {
      id: uuid(),
      name: "instax SQUARE SQ1 Instant Camera",
      image:
        "https://media.4rgos.it/i/Argos/8464253_R_Z001A?w=1500&h=880&qlt=70&fmt=webp",
      addedDate: "03-05-2021",
    },
    {
      id: uuid(),
      name: "Samsung S23 Ultra",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/uk/2302/gallery/uk-galaxy-s23-s918-447009-sm-s918bzadeub-534886905?$1300_1038_PNG$",
      addedDate: "17-04-2023",
    },
    {
      id: uuid(),
      name: " LG 34'' 21:9 UltraWide™ Full HD IPS Monitor with AMD FreeSync™",
      image:
        "https://www.lg.com/uk/images/monitors/md07560208/gallery/D-01.jpg",
      addedDate: "21-07-2019",
    },
    {
      id: uuid(),
      name: "Neewer Portable 56 inches Camera Tripod",
      image: "https://m.media-amazon.com/images/I/71k3mWChFtL._AC_SL1500_.jpg",
      addedDate: "15-02-2020",
    },
  ];

  const [page, setPage] = useState("Landing Page");
  const [cartItem, setCartItem] = useState(0);
  const [wishlistItem, setWishlistItem] = useState(0);
  const [data, setData] = useState(productsData);

  const showHomePage = () => {
    setPage("Home Page");
  };

  const backToLandingPage = () => {
    setPage("Landing Page");
  };

  const showProductOverviewPage = () => {
    setPage("Overview Product Page");
  };

  const AddToCart = (item) => {
    setCartItem(item + 1);
    console.log("Item added to cart!");
  };

  const AddToWishlist = (item) => {
    setWishlistItem(item + 1);
    console.log("Item added to wishlist!");
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
          cartTotal={cartItem}
          setCartItem={setCartItem}
          wishlistTotal={wishlistItem}
          setWishlistItem={setWishlistItem}
          data={data}
          showProductOverviewPage={showProductOverviewPage}
          AddToCart={(event) => AddToCart(event)}
          AddToWishlist={(event) => AddToWishlist(wishlistItem)}
          DeleteProduct={(event) => DeleteProduct(event)}
        />
      );
    } else if (page === "Overview Product Page") {
      currentPage = <ProductOverviewPage showHomePage={showHomePage} />;
    } else {
      currentPage = <div>ERROR!</div>;
    }
  }

  // const url =
  //   "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "content-type": "application/octet-stream",
  //     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  //     "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  //   },
  // };

  // API
  // useEffect(() => {
  //   try {
  //     async function fetchData() {
  //       const data = await fetch(url, options);
  //       const response = await data.json();
  //       const arrayData = [];
  //       arrayData.push(response);
  //       console.log(arrayData);
  //       setData(arrayData);
  //     }
  //     fetchData();
  //   } catch (error) {
  //     console.log("ERROR: ", error);
  //   }
  // }, []);

  return <div className="App">{currentPage}</div>;
}

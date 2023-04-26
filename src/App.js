import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useId } from "react";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import LikedItems from "./components/LikedItems";
import { useState, useEffect } from "react";

function App() {
  const itemsData = [
    {
      id: useId(),
      name: "Children Of Blood And Bone - Tomi Adeyemi",
      image: "https://m.media-amazon.com/images/I/61Zxem3qIIL._SL500_.jpg",
      likedDate: "25-12-2021",
    },
    {
      id: useId(),
      name: "The Golden Compass - Phillip Pullman",
      image:
        "https://1.bp.blogspot.com/-FmVt32Oomxw/T4hDo_cO-sI/AAAAAAAAAD8/4PwXbtvZ4Sc/s1600/gc.jpg",
      likedDate: "12-02-2011",
    },
    {
      id: useId(),
      name: "Eye of the Wolf - Daniel Pennac",
      image:
        "https://m.media-amazon.com/images/I/51--SmriPXL._SX400_BO1,204,203,200_.jpg",
      likedDate: "04-10-2014",
    },
    {
      id: useId(),
      name: "Eragon - Chrisopher Paolini",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/ce/Eragon_book_cover.png",
      likedDate: "29-04-2006",
    },
    {
      id: useId(),
      name: "Diary of a Wimpy Kid",
      image:
        "https://toppsta.com/images/covers/4/9/0/6/9780141324906.webp?t=1644290789",
      likedDate: "15-09-2009",
    },
    {
      id: useId(),
      name: "Taking Up Space - The Black Girl's Manifesto for Change - Chelsea Kwakye & Ore Ogunbiyi",
      image:
        "https://cdn.waterstones.com/bookjackets/large/9781/5291/9781529118544.jpg",
      likedDate: "",
    },
    {
      id: useId(),
      name: "Canon EOS M50 Mark II Camera Body",
      image:
        "https://i1.adis.ws/i/canon/eos-m50-mark-ii_range-page_be49ca9dbc354c03a09cdd0fd898d92a",
      likedDate: "11-01-2023",
    },
    {
      id: useId(),
      name: "DJI Osmo Mobile 3",
      image: "https://m.media-amazon.com/images/I/61CB0Ey932L._AC_SL1100_.jpg",
      likedDate: "30-10-2022",
    },
    {
      id: useId(),
      name: "instax SQUARE SQ1 Instant Camera",
      image:
        "https://media.4rgos.it/i/Argos/8464253_R_Z001A?w=1500&h=880&qlt=70&fmt=webp",
      likedDate: "03-05-2021",
    },
    {
      id: useId(),
      name: "Samsung S23 Ultra",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/uk/2302/gallery/uk-galaxy-s23-s918-447009-sm-s918bzadeub-534886905?$1300_1038_PNG$",
      likedDate: "17-04-2023",
    },
    {
      id: useId(),
      name: " LG 34'' 21:9 UltraWide™ Full HD IPS Monitor with AMD FreeSync™",
      image:
        "https://www.lg.com/uk/images/monitors/md07560208/gallery/D-01.jpg",
      likedDate: "21-07-2019",
    },
    {
      id: useId(),
      name: "Neewer Portable 56 inches Camera Tripod",
      image: "https://m.media-amazon.com/images/I/71k3mWChFtL._AC_SL1500_.jpg",
      likedDate: "15-02-2020",
    },
  ];

  function AddToCart(item) {
    setCartItem(item + 1);
    console.log("Item added to cart!");
  }

  function AddToWishlist(item) {
    setWishlistItem(item + 1);
    console.log("Item added to wishlist!");
  }

  const [cartItem, setCartItem] = useState(0);

  const [wishlistItem, setWishlistItem] = useState(0);
  const [data, setData] = useState();

  const url =
    "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  useEffect(() => {
    try {
      async function fetchData() {
        const data = await fetch(url, options);
        const response = await data.json();
        const arrayData = [];
        arrayData.push(response);
        console.log(arrayData);
        setData(arrayData);
      }
      fetchData();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }, []);

  return (
    <div className="App">
      <NavbarComp
        cartTotal={cartItem}
        setCartItem={setCartItem}
        wishlistTotal={wishlistItem}
        setWishlistItem={setWishlistItem}
      />
      <Categories />
      <h1 id="heading">Items</h1>

      <LikedItems
        items={itemsData}
        AddToCart={(event) => AddToCart(cartItem)}
        AddToWishlist={(event) => AddToWishlist(wishlistItem)}
      />
      {JSON.stringify(data)}
      <Footer />
    </div>
  );
}

export default App;

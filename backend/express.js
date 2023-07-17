import express from "express";
import * as dotenv from "dotenv";
import { v4 as uuid } from "uuid";

dotenv.config();
const app = express();

const productsData = [
  {
    id: 1,
    name: "Children Of Blood And Bone - Tomi Adeyemi",
    image: "https://m.media-amazon.com/images/I/61Zxem3qIIL._SL500_.jpg",
    price: 5.35,
    isbn: "978-1-250-17097-2",
    publicationDate: "06/03/2018",
    description:
      "Blood and Bone follows a young girl, Zélie, who lives in Orïsha, a mythical world filled with magic, monarchy, and the problems often associated with them: class discrimination, abuse of power, and violence."
  },
  {
    id: 2,
    name: "The Golden Compass - Phillip Pullman",
    image:
      "https://1.bp.blogspot.com/-FmVt32Oomxw/T4hDo_cO-sI/AAAAAAAAAD8/4PwXbtvZ4Sc/s1600/gc.jpg",
    addedDate: "12-02-2011",
    price: 2.75,
  },
  {
    id: 3,
    name: "Eye of the Wolf - Daniel Pennac",
    image:
      "https://m.media-amazon.com/images/I/51--SmriPXL._SX400_BO1,204,203,200_.jpg",
    addedDate: "04-10-2014",
    price: 5.22,
  },
  {
    id: 4,
    name: "Eragon - Christopher Paolini",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/ce/Eragon_book_cover.png",
    addedDate: "29-04-2006",
    price: 14.13,
  },
  {
    id: 5,
    name: "Diary of a Wimpy Kid - Jeff Kinney",
    image:
      "https://toppsta.com/images/covers/4/9/0/6/9780141324906.webp?t=1644290789",
    addedDate: "15-09-2009",
    price: 5.81,
  },
  {
    id: 6,
    name: "Taking Up Space - The Black Girl's Manifesto for Change - Chelsea Kwakye & Ore Ogunbiyi",
    image:
      "https://cdn.waterstones.com/bookjackets/large/9781/5291/9781529118544.jpg",
    addedDate: "06-09-2019",
    price: 9.85,
  },
  {
    id: 7,
    name: "Canon EOS M50 Mark II Camera Body",
    image:
      "https://i1.adis.ws/i/canon/eos-m50-mark-ii_range-page_be49ca9dbc354c03a09cdd0fd898d92a",
    addedDate: "11-01-2023",
    price: 629,
  },
  {
    id: 8,
    name: "DJI Osmo Mobile 3",
    image: "https://m.media-amazon.com/images/I/61CB0Ey932L._AC_SL1100_.jpg",
    addedDate: "30-10-2022",
    price: 95,
  },
  {
    id: 9,
    name: "instax SQUARE SQ1 Instant Camera",
    image:
      "https://media.4rgos.it/i/Argos/8464253_R_Z001A?w=1500&h=880&qlt=70&fmt=webp",
    addedDate: "03-05-2021",
    price: 111.18,
  },
  {
    id: 10,
    name: "Samsung S23 Ultra",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uk/2302/gallery/uk-galaxy-s23-s918-447009-sm-s918bzadeub-534886905?$1300_1038_PNG$",
    addedDate: "17-04-2023",
    price: 1399,
  },
  {
    id: 11,
    name: "LG 34'' 21:9 UltraWide™ Full HD IPS Monitor with AMD FreeSync™",
    image: "https://www.lg.com/uk/images/monitors/md07560208/gallery/D-01.jpg",
    addedDate: "21-07-2019",
    price: 304.38,
  },
  {
    id: 12,
    name: "Neewer Portable 56 inches Camera Tripod",
    image: "https://m.media-amazon.com/images/I/71k3mWChFtL._AC_SL1500_.jpg",
    addedDate: "15-02-2020",
    price: 56.99,
  },
];

const basket = [];

// Landing Page
app.get("/", function (req, res) {
  res.send("Hello, world!");
});

// Home Page & Display items
app.get("/home", function (req, res) {
  console.log(productsData);
  res.send(productsData);
});

// Overview Product
app.get("/overview/:id", function (req, res) {
  const overviewId = req.params.id;
  const overviewItem = productsData.find(
    (product) => product.id === Number(overviewId)
  );
  console.log(typeof overviewId);
  console.log("ITEM: ", overviewItem);
  res.send(overviewItem);
});

// Add to Basket
app.post("/addtobasket/:id", function (req, res) {
  const overviewId = req.params.id;
  const overviewItem = productsData.find(
    (product) => product.id === Number(overviewId)
  );
  basket.push(overviewItem);
  console.log(basket);
  res.send(basket);
});

// Basket
app.get("/basket/", function (req, res) {
  res.send(basket);
});

// Add to Wishlist
app.post("/addtowishlist/:id", function (req, res) {});

// Remove from Basket
app.delete("/removefrombasket/:id", function (req, res) {
  const productId = req.params.id;
  const product = basket.filter((product) => product.id !== Number(productId));

  res.send(product);
});

// Books
app.get("/books", function (req, res) {});

app.listen(process.env.PORT, function (req, res) {
  console.log(`listening on port ${process.env.PORT}`);
});

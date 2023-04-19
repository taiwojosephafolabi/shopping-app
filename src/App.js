import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import LikedItems from "./components/LikedItems";
function App() {
  const itemsData = [
    {
      name: "Canon EOS M50 Mark II Camera Body",
      image:
        "https://i1.adis.ws/i/canon/eos-m50-mark-ii_range-page_be49ca9dbc354c03a09cdd0fd898d92a",
      likedDate: "11-01-2023",
    },
    {
      name: "DJI Osmo Mobile 3",
      image: "https://m.media-amazon.com/images/I/61CB0Ey932L._AC_SL1100_.jpg",
      likedDate: "30-10-2022",
    },
    {
      name: "instax SQUARE SQ1 Instant Camera",
      image:
        "https://media.4rgos.it/i/Argos/8464253_R_Z001A?w=1500&h=880&qlt=70&fmt=webp",
      likedDate: "03-05-2021",
    },
    {
      name: "Samsung S23 Ultra",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/uk/2302/gallery/uk-galaxy-s23-s918-447009-sm-s918bzadeub-534886905?$1300_1038_PNG$",
      likedDate: "17-04-2023",
    },
    {
      name: " LG 34'' 21:9 UltraWide™ Full HD IPS Monitor with AMD FreeSync™",
      image:
        "https://www.lg.com/uk/images/monitors/md07560208/gallery/D-01.jpg",
      likedDate: "21-07-2019",
    },
    {
      name: "Neewer Portable 56 inches Camera Tripod",
      image: "https://m.media-amazon.com/images/I/71k3mWChFtL._AC_SL1500_.jpg",
      likedDate: "15-02-2020",
    },
  ];

  return (
    <div className="App">
      <NavbarComp />
      <Categories />
      <h1 id="heading">Liked Items</h1>
      {/* <Navbar /> */}
      <LikedItems items={itemsData} />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import CartButton from "./AddToCartButton";
import DeleteButton from "./DeleteButton";

function WishlistPage({ showHomePage, wishlistData, AddToCart, DeleteProduct }) {
  return (
    <div className="App">
      <h1 className="heading">Wishlist</h1>
      <span className="button-container">
        <button type="button" className="button" onClick={() => showHomePage()}>
          Back to Home
        </button>
      </span>
      <div className="container">
        {wishlistData.map((data, index) => {
          return (
            <div className="product-card" key={index}>
              <h4> {data.name} </h4>
              <img className="image" src={data.image} alt={data.name} />
              <h6> Added on: {data.addedDate}</h6>
              <h5> Price: £{data.price}</h5>
              <span className="button-container">
                <CartButton AddToCart={() => AddToCart(data)} />
                <DeleteButton DeleteProduct={() => DeleteProduct(data.id)} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WishlistPage;

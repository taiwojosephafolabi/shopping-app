import React from "react";

function CartPage({ showHomePage, cartData }) {
  return (
    <div className="App">
      <h1 className="heading">Cart</h1>
      <span className="button-container">
        <button type="button" className="button" onClick={() => showHomePage()}>
          Back to Home
        </button>
      </span>
      <div className="container">
        {cartData.map((data, index) => {
          return (
            <div className="liked-item" key={index}>
              <h4> {data.name} </h4>
              <img className="image" src={data.image} alt={data.name} />
              <h6> Added on: {data.addedDate}</h6>
              <h5> Price: £{data.price}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartPage;

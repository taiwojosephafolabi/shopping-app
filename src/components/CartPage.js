import React from "react";

function CartPage({ showHomePage }) {
  return (
    <div className="App">
      <h1 className="heading">Cart</h1>
      <span className="button-container">
        <button type="button" className="button" onClick={() => showHomePage()}>
          Back to Home
        </button>
      </span>
    </div>
  );
}

export default CartPage;

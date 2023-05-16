import React from "react";

function WishlistPage({ showHomePage }) {
  return (
    <div className="App">
      <h1 className="heading">Wishlist</h1>
      <span className="button-container">
        <button type="button" className="button" onClick={() => showHomePage()}>
          Back to Home
        </button>
      </span>
    </div>
  );
}

export default WishlistPage;

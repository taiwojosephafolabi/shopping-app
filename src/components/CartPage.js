import React from "react";
import DeleteButton from "./DeleteButton";
import Count from "./CountButton";

function CartPage({
  showHomePage,
  cartData,
  cartTotal,
  cartTotalPrice,
  DeleteProduct,
}) {
  return (
    <div className="App">
      <h1 className="heading">Cart</h1>
      <span className="button-container">
        <button type="button" className="button" onClick={() => showHomePage()}>
          Back to Home
        </button>
      </span>
      <div className="price-container">
        <h4>Total Price: £{cartTotalPrice}</h4>
      </div>
      <div className="container">
        {cartData.map((data, index) => {
          return (
            <div className="product-card2" key={index}>
              <img
                className="product-card2-image"
                src={data.image}
                alt={data.name}
              />
              <div className="product-card2-info">
                <h4> {data.name} </h4>
                <h5> Price: £{data.price}</h5>
                <div className="button-container3">
                  <Count cartTotal={cartTotal} />
                </div>
                <span className="button-container4">
                  <DeleteButton DeleteProduct={() => DeleteProduct(data.id)} />
                </span>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartPage;

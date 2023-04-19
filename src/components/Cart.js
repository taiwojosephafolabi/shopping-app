import { BsFillCartFill } from "react-icons/bs";

function Cart(props) {
  function handleCartItem() {
    props.setCartItem(0);
  }

  return (
    <div>
      <button className="cart-container" onClick={handleCartItem}>
        <BsFillCartFill className="cart" />
        <span id="cart-number">{props.cartTotal}</span>
      </button>
    </div>
  );
}

export default Cart;

function CartButton(props) {
  return (
    <div>
      <button className="add-to-cart-btn" onClick={props.AddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default CartButton;

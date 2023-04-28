function DeleteButton(props) {
  return (
    <div>
      <button className="delete-product-btn" onClick={event => props.DeleteProduct(event)}>
        Delete Product
      </button>
    </div>
  );
}

export default DeleteButton;
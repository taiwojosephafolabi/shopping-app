function DeleteButton({ DeleteProduct }) {
  return (
    <div>
      <button
        className="delete-product-btn"
        onClick={(event) => DeleteProduct(event)}
      >
        Delete Product
      </button>
    </div>
  );
}

export default DeleteButton;

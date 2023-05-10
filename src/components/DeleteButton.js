function DeleteButton({ DeleteProduct }) {
  return (
    <div>
      <button
        className="button"
        onClick={(event) => DeleteProduct(event)}
      >
        Delete Product
      </button>
    </div>
  );
}

export default DeleteButton;

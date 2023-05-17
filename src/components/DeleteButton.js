function DeleteButton({ DeleteProduct }) {
  return (
    <div>
      <button
        className="button"
        onClick={DeleteProduct}
      >
        Delete Product
      </button>
    </div>
  );
}

export default DeleteButton;

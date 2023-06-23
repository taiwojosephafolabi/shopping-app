import { TiDelete } from "react-icons/ti";

function DeleteButton({ DeleteProduct }) {
  return (
    <div>
      <button className="button" onClick={DeleteProduct}>
        <TiDelete />
      </button>
    </div>
  );
}

export default DeleteButton;

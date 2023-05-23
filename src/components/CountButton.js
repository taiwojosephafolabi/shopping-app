import { FaMinusSquare } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";

function Count({ cartTotal }) {
  return (
    <div>
      
      <button className="button" >
        <FaMinusSquare />
      </button>
      {cartTotal}
      <button className="button" >
        <FaPlusSquare />
      </button>
      
    </div>
  );
}

export default Count;

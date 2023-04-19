import AddToCartButton from './AddToCartButton'

function LikedItems(props) {
  function AddToCart() {
    console.log("You clicked me!");
  };

  return (
    <div className="container">
      {props.items.map((itemsData, index) =>(
        <div key={index} className = "liked-item">
          <h4> {itemsData.name} </h4>
          <img className="image" src={itemsData.image} alt="Logo" />
          <h6> Liked on: {itemsData.likedDate}</h6>
          <AddToCartButton AddToCart={AddToCart} />
        </div>
      ))}
    </div>
  );
}

export default LikedItems;

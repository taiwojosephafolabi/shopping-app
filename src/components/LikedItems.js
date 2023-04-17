function LikedItems(props) {
  return (
    <div className="container">
      {props.items.map((itemsData, index) =>(
        <div key={index} class = "liked-item">
          <h4> {itemsData.name} </h4>
          <img class="image" src={itemsData.image} alt="Logo" />
          <h6> Liked on: {itemsData.likedDate}</h6>
        </div>
      ))}
    </div>
        // <div class="liked-item">
        //   <h4> {itemsData.itemName} </h4>
        //   <img class="image" src={itemsData.image} alt="Logo" />
        //   <h6> Liked on: {itemsData.likedDate}</h6>
        // </div>
  );
}

export default LikedItems;

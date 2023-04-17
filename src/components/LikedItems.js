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
  );
}

export default LikedItems;

import "./Card.css";

const Card = ({ name, price, image }) => {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-img">
          <img src={image} alt="product" />
        </div>
        <div className="card-name">
          <h4>{name}</h4>
        </div>
        <div className="card-price">
          <h3>₹ {price}</h3>
        </div>
        <div className="card-detail">
          <p>Free Delivery</p>
          <span>In Stock</span>
        </div>
      </div>
    </div>
  );
};
// Price,name,img,in stock,free delivery
export default Card;

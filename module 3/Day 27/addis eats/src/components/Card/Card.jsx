import Badge from "../Badge/Badge.jsx";

const Card = (props) => {
  const { name: productName, description, price, ispaid } = props;
  return (
    <div>
      <h2>{productName}</h2>
      <p>{description}</p>
      <span>{price}</span>
      <span>status:{ispaid ? "not available" : "available"}</span>
      <span>{ispaid ? <Badge /> : ""}</span>
    </div>
  );
};

export default Card;

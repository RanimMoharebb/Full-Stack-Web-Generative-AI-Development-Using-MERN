const ProductCard = ({ name, description, image }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", width:"200px" }}>
      <img src={image} alt={name} width="100%" />
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={() => console.log(name)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
const ProductCard = ({ name, description, image, addToCart }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "15px",
        width: "220px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "0.3s"
      }}
    >
      <img src={image} alt={name} width="100%" />

      <h3>{name}</h3>
      <p>{description}</p>

      <button
        onClick={addToCart}
        style={{
          padding: "8px 12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
import { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import laptop from "./assets/laptop.jpg";
import phone from "./assets/phone.jpg";
import watch from "./assets/watch.jpg";
import laptop2 from "./assets/laptop.jpg";
import phone2 from "./assets/phone.jpg";
import watch2 from "./assets/watch.jpg";
function App() {
  const [cartCount, setCartCount] = useState(0);
  const products = [
    { id: 1, name: "Laptop", description: "Gaming laptop", image: laptop },
    { id: 2, name: "Phone", description: "Smart phone", image: phone },
    { id: 3, name: "Watch", description: "Smart watch", image: watch },
    { id: 4, name: "Laptop Pro", description: "Work laptop", image: laptop2 },
    { id: 5, name: "Phone Max", description: "Large phone", image: phone2 },
    { id: 6, name: "Watch Sport", description: "Sport watch", image: watch2 }
  ];
  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>
      <h2>Cart 🛒: {cartCount}</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            addToCart={() => setCartCount(cartCount + 1)}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
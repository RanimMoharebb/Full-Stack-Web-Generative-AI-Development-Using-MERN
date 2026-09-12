import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

function Dashboard() {
  const { products, addProduct, deleteProduct, updateProduct } =
    useContext(ProductContext);

  const { addToCart } = useContext(CartContext);

  // CREATE STATE
  const [name, setName] = useState("");

  // UPDATE STATE
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  // ADD PRODUCT
  const handleAdd = () => {
    if (name.trim() === "") return;
    addProduct({ name });
    setName("");
  };

  // SAVE UPDATE
  const handleUpdate = () => {
    updateProduct({ id: editingId, name: editingName });
    setEditingId(null);
    setEditingName("");
  };

  return (
    <div className="dashboard">
      <h2>📦 Products Dashboard</h2>

      {/* CREATE PRODUCT */}
      <div>
        <input
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAdd}>Add Product</button>
      </div>

      <hr />

      {/* PRODUCT LIST */}
      {products.length === 0 ? (
        <p>No products yet</p>
      ) : (
        products.map((p) => (
          <div className="product" key={p.id}>
            
            {/* UPDATE MODE */}
            {editingId === p.id ? (
              <div>
                <input
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                />
                <button onClick={handleUpdate}>Save</button>
                <button onClick={() => setEditingId(null)}>
                  Cancel
                </button>
              </div>
            ) : (
              <>
                {/* PRODUCT NAME */}
                <span>{p.name}</span>

                {/* ACTION BUTTONS */}
                <div>
                  <button onClick={() => addToCart(p)}>
                    Add to Cart
                  </button>

                  <button
                    onClick={() => {
                      setEditingId(p.id);
                      setEditingName(p.name);
                    }}
                  >
                    Edit
                  </button>

                  <button onClick={() => deleteProduct(p.id)}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
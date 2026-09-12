import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // ✅ FIX: initial products added
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Headphones" }
  ]);

  // CREATE
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  // DELETE
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // UPDATE
  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((p) =>
        p.id === updatedProduct.id ? updatedProduct : p
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
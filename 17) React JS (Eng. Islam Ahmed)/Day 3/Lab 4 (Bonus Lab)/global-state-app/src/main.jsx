import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </AuthProvider>
);
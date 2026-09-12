import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <h2>Store</h2>

      {user && <span>Hello {user.name}</span>}

      <span>Cart: {cart.length}</span>

      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

export default Navbar;
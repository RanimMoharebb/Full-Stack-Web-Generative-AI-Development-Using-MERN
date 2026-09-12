import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <h3>Please login first</h3>;
  }

  return children;
}

export default ProtectedRoute;
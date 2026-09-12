import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="username"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => login(name)}>Login</button>
    </div>
  );
}

export default Login;
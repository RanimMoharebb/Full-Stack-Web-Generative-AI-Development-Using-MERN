import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/login" onClick={() => localStorage.removeItem("token")}>
      <Link to="/logs">Logs</Link>
        Logout
      </Link>
    </div>
  );
}

export default Navbar;
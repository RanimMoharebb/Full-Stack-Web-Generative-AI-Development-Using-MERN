import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h2>Dashboard</h2>

      <h3>Welcome {user?.name || user?.email}</h3>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Login />

      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    </>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./pages/TaskList";
import TaskDetail from "./pages/TaskDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
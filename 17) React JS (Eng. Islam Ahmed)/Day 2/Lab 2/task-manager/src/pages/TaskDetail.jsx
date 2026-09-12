import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const tasks = JSON.parse(saved);
      const found = tasks.find((t) => t.id === Number(id));
      if (found) {
        setTask(found);
        setText(found.text);
        setCompleted(found.completed);
      }
    }
  }, [id]);

  const handleSave = () => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const tasks = JSON.parse(saved);
      const updatedTasks = tasks.map((t) =>
        t.id === Number(id) ? { ...t, text, completed } : t
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      navigate("/");
    }
  };

  if (!task)
    return (
      <div className="max-w-md mx-auto mt-10 p-6 border rounded bg-white shadow-lg">
        <p className="text-gray-500 text-center">Task not found</p>
        <Link
          to="/"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          ← Back to Task List
        </Link>
      </div>
    );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded bg-white shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Edit Task
      </h1>

      <label className="block mb-2 font-semibold">Text:</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block mb-4 font-semibold">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mr-2"
        />
        Completed
      </label>

      <button
        onClick={handleSave}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Save
      </button>

      <Link
        to="/"
        className="text-blue-500 hover:underline mt-4 inline-block text-center"
      >
        ← Back to Task List
      </Link>
    </div>
  );
}

export default TaskDetail;
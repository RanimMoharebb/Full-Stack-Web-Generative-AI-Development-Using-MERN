import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([newTask, ...tasks]);
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Task Manager
      </h1>

      <TaskForm addTask={addTask} />

      {/* Filter buttons */}
      <div className="flex gap-2 justify-center mb-4">
        {["All", "Active", "Completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded font-semibold ${
              filter === f
                ? "bg-blue-500 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Task list */}
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-400 mt-4">No tasks yet</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
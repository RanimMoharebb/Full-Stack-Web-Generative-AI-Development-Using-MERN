import { Link } from "react-router-dom";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="flex justify-between items-center mb-2 p-3 border rounded hover:bg-gray-50 transition">
      <Link
        to={`/tasks/${task.id}`}
        className={`flex-1 cursor-pointer break-words ${
          task.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {task.text}
      </Link>

      <button
        onClick={() => toggleTask(task.id)}
        className="text-green-500 hover:text-green-700 mx-2 font-bold"
      >
        ✔
      </button>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        ✖
      </button>
    </div>
  );
}

export default TaskItem;
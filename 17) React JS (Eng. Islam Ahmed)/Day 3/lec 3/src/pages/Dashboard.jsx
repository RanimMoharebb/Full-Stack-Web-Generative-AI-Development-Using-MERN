import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { decrement, increment } from "../store/counter/slice";

const Dashboard = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <main>
        <div className="flex flex-col justify-between items-start">
          <Link to="/dashboard/user">Open user</Link>
          <Link to="/dashboard/settings">Open settings</Link>
        </div>
        <div className="flex flex-col">
          <p>{count}</p>
          <button
            className="border-2 p-5"
            onClick={() => dispatch(increment())}
          >
            Add
          </button>
          <button
            className="border-2 p-5"
            onClick={() => dispatch(decrement())}
          >
            Remove
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

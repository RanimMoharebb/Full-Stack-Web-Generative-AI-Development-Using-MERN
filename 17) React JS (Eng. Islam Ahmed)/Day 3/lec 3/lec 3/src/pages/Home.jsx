import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import { ThemeContext } from "../context/themeContext/context";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/users/client";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const loading = useSelector((state) => state.users.loading);
  const users = useSelector((state) => state.users.userList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1>Home</h1>
      <Link to="/dashboard">Open Dashbaord with theme {theme}</Link>
      <button onClick={toggleTheme}> Toggle theme </button>
      <Signup />

      <div className="flex flex-col">
        {loading && <p>Loading ....</p>}
        <ul>
          {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Home;

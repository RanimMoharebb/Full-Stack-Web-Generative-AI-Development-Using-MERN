import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
      <Link to="/products">Go to products</Link>
    </div>
  );
};

export default Home;

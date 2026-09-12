import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Link to="/product/1">Product </Link>
      <Link to="/product/2">Product </Link>
    </div>
  );
};

export default Products;

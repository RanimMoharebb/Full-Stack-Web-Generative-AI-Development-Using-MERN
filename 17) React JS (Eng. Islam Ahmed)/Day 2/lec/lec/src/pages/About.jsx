import React from "react";
import { useNavigate, Link } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center gap-5">
      <h2>About</h2>
      {/* <button type="button" onClick={() => navigate("/")}>
        Home
      </button> */}
      <Link to="/"> Home </Link>
    </div>
  );
};

export default About;

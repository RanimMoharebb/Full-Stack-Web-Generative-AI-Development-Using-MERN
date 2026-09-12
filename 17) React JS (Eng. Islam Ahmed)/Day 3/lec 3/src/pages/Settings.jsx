import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center gap-5">
      <h2>Settings Screen</h2>
    </div>
  );
};

export default Settings;

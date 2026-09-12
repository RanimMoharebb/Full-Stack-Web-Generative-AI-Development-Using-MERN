import React from "react";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // clear error while typing
    setError("");
  };

  const handleLogin = () => {
    if (!form.email) {
      setError("Email is required");
      return;
    }

    if (!form.password) {
      setError("Password is required");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    console.log(form);
  };

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex flex-col gap-2 mb-5">
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          className="border-2 p-2"
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="border-2 p-2"
        />
      </div>

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <button
        className="bg-black text-white rounded-md p-2"
        onClick={handleLogin}
        type="button"
      >
        Login
      </button>
    </div>
  );
};

export default Login;

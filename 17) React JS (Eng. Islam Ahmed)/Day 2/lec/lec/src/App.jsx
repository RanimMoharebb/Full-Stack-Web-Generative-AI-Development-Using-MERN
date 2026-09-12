import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
const App = () => {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const [users, setUsers] = useState([]);

  const url = "https://api.github.com/users";

  const FetchUsers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    // setUsers(data);
  };

  useEffect(() => {
    FetchUsers();
  }, []);

  const doubledNums = useMemo(() => count * 2, []);

  return (
    <div className="flex justify-center flex-col items-center">
      {/* Routing */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>

      {/* counter */}
      {/* <div className="flex flex-col mb-5">
        <h1 className=" text-2xl">Welcome</h1>
        <button
          className="border-2 p-2 w-7"
          onClick={() => setCount(count + 1)}
        >
          {count}
        </button>
      </div> */}

      {/* names */}

      {/* <button
        className="border-2 p-2 w-2xl"
        onClick={() => setNames([...names, "New Name Added"])}
      >
        Add new Item
      </button> */}

      {/* <ul className="mb-10">
        {names.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul> */}

      {/* User info */}
      {/* 
      <div className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          className="border-2 border-amber-700 p-2"
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
        <input
          type="number"
          name="age"
          className="border-2 border-amber-700 p-2"
          onChange={(e) => setUserInfo({ ...userInfo, age: e.target.value })}
        />

        <button
          className="border-2 p-2 w-2xs"
          onClick={() => alert(JSON.stringify(userInfo))}
        >
          submit
        </button>
      </div> */}

      {/* users from APi  */}

      {/* <div className="flex flex-col justify-center">
        <ul>
          {users.map((user) => (
            <li key={user.id}> {user.login}</li>
          ))}
        </ul>
      </div> */}

      {/* memoized calc val  */}
      {/* <p> new doubled val : {doubledNums}</p> */}
    </div>
  );
};

export default App;

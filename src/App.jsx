
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Protect from "./components/Protect";
import Dashboard from "./components/Dashboard";
import Parent from "./components/Parent";
import Child from "./components/Child";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home name={name} age={age} setName={setName} setAge={setAge} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<h2>Dashboard </h2>} />
          <Route path="protect" element={<Protect />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
        <Route path="parent" element={<Parent />} />
        <Route
          path="child"
          element={
            <Child name={name} age={age} setName={setName} setAge={setAge} />
          }
        />
      </Routes>
    </>
  );
};

export default App;

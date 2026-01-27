import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Protect from "./components/Protect";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="protect" element={<Protect />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </>
  );
};

export default App;

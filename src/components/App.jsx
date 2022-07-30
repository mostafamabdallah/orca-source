import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

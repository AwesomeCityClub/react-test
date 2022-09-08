import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeComponent from "./components/home-component";
import NavComponent from "./components/nav-component";

function App() {
  return (
    <div>
      <Routes>
        <NavComponent />
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;

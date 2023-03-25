import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className={isDark ? " bg-stone-900  font-abc text-orange-100 " : "bg-pattens-blue-100 font-abc text-mine-shaft-900"}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;

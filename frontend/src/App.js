import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddMember from "./pages/AddMember";
import ViewMembers from "./pages/ViewMembers";
import MemberDetails from "./pages/MemberDetails";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <Router>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 30px" }}>
        <h1>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Team Name: CurseForge
          </Link>
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            color: "white"
          }}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <FaEyeSlash /> : <FaEye />}
        </button>
      </header>
      <div style={{
  height: "20px",
  background: "linear-gradient(to bottom, orange, transparent)"
}}></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMember />} />
        <Route path="/members" element={<ViewMembers />} />
        <Route path="/members/:id" element={<MemberDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import "./navbar.css";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query); // send search text to parent
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="/k.png" alt="Logo" />
      </div>

 
    

      {/* Links */}
      <div className="nav-links">
        <a href="#" className="link">Home</a>
        <a href="#" className="link">About</a>
        <a href="#" className="link">Services</a>
        <a href="#" className="link">Blog</a>
        <a href="#" className="link">Contact</a>
        <a href="#" className="link">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;

// src/components/Header/Header.js
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Task Manager</h1>
        <p className="header-subtitle">Organize your daily tasks efficiently</p>
      </div>
    </header>
  );
}

export default Header;

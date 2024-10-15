// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Fitness Tracker</h1>
      <nav>
        <Link to="/" className="mr-4">
          Dashboard
        </Link>
        <Link to="/log-workout">Log Workout</Link>
      </nav>
    </header>
  );
};

export default Header;

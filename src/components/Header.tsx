import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-surface shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-primary text-2xl font-bold">
          FitnessTracker
        </Link>
        <nav className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-primary font-semibold'
                : 'text-onSurface hover:text-primary transition'
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/log-workout"
            className={({ isActive }) =>
              isActive
                ? 'text-primary font-semibold'
                : 'text-onSurface hover:text-primary transition'
            }
          >
            Log Workout
          </NavLink>
          <NavLink
            to="/achievements"
            className={({ isActive }) =>
              isActive
                ? 'text-primary font-semibold'
                : 'text-onSurface hover:text-primary transition'
            }
          >
            Achievements
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
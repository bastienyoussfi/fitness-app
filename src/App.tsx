import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import LogWorkoutPage from './pages/LogWorkout';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/log-workout" element={<LogWorkoutPage />} />
      </Routes>
    </div>
  );
};

export default App;

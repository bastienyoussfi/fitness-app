import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import WorkoutList from '../components/WorkoutList';
import ProgressChart from '../components/ProgressChart';
import Goals from '../components/Goals';
import UserProfile from '../components/UserProfile';
import Achievements from '../components/Achievements';
import { motion } from 'framer-motion';
import ExportData from '../components/ExportData';

const Dashboard: React.FC = () => {
  const { workouts, goals, addWorkout, addGoal } = useContext(AppContext);

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-bold">Welcome to Your Fitness Tracker!</h1>
        <p className="mt-2">
          Track your workouts, achieve your goals, earn XP, and level up your fitness journey.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Profile */}
        <UserProfile />

        {/* Achievements */}
        <Achievements />

        {/* Goals */}
        <Goals goals={goals} addGoal={addGoal} />
      </div>

      {/* Workout List and Export Options */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WorkoutList workouts={workouts} />
        <div className="flex flex-col space-y-4">
          <ProgressChart workouts={workouts} />
          <ExportData />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
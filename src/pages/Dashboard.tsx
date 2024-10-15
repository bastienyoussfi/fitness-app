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
      <motion.div
        className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-lg mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold">Welcome to Your Fitness Tracker!</h1>
        <p className="mt-2">Track your workouts, achieve your goals, and level up your fitness journey.</p>
      </motion.div>

      <UserProfile />
      <Achievements />
      <WorkoutList workouts={workouts} />
      <ProgressChart workouts={workouts} />
      <Goals goals={goals} addGoal={addGoal} />
      <ExportData />
    </div>
  );
};

export default Dashboard;
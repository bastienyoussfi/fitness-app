import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import WorkoutList from '../components/WorkoutList';
import ProgressChart from '../components/ProgressChart';
import Goals from '../components/Goals';

const Dashboard: React.FC = () => {
  const { workouts, goals, addWorkout, addGoal } = useContext(AppContext);

  return (
    <div className="container mx-auto p-4">
      <WorkoutList workouts={workouts} />
      <ProgressChart workouts={workouts} />
      <Goals goals={goals} addGoal={addGoal} />
    </div>
  );
};

export default Dashboard;

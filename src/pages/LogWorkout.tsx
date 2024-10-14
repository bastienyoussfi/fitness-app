// src/pages/LogWorkout.tsx
import React, { useContext } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import { AppContext } from '../context/AppContext';

const LogWorkoutPage: React.FC = () => {
  const { addWorkout } = useContext(AppContext);

  return (
    <div className="container mx-auto p-4">
      <WorkoutForm addWorkout={addWorkout} />
    </div>
  );
};

export default LogWorkoutPage;

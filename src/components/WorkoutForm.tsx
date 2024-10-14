// src/components/WorkoutForm.tsx
import React, { useState } from 'react';
import Workout from '../types/workout';
import { v4 as uuidv4 } from 'uuid';

interface WorkoutFormProps {
  addWorkout: (workout: Workout) => void;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({ addWorkout }) => {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState<number>(0);
  const [caloriesBurned, setCaloriesBurned] = useState<number>(0);
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newWorkout: Workout = {
      id: uuidv4(),
      date,
      type,
      duration,
      caloriesBurned,
    };
    addWorkout(newWorkout);
    // Reset form
    setType('');
    setDuration(0);
    setCaloriesBurned(0);
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Log a New Workout</h2>
      <div className="mb-4">
        <label className="block mb-1">Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
          placeholder="e.g., Running, Cycling"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Duration (minutes)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          required
          className="w-full border px-3 py-2 rounded"
          min="0"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Calories Burned</label>
        <input
          type="number"
          value={caloriesBurned}
          onChange={(e) => setCaloriesBurned(Number(e.target.value))}
          required
          className="w-full border px-3 py-2 rounded"
          min="0"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Workout
      </button>
    </form>
  );
};

export default WorkoutForm;

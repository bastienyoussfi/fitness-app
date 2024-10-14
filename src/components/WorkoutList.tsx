// src/components/WorkoutList.tsx
import React from 'react';
import { Workout } from '../types/workout';

interface WorkoutListProps {
  workouts: Workout[];
}

const WorkoutList: React.FC<WorkoutListProps> = ({ workouts }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Your Workouts</h2>
      {workouts.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Duration (min)</th>
              <th className="px-4 py-2">Calories Burned</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <tr key={workout.id} className="text-center">
                <td className="border px-4 py-2">{workout.date}</td>
                <td className="border px-4 py-2">{workout.type}</td>
                <td className="border px-4 py-2">{workout.duration}</td>
                <td className="border px-4 py-2">{workout.caloriesBurned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WorkoutList;

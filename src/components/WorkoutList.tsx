// src/components/WorkoutList.tsx
import React from "react";
import Workout from "../types/workout";
import { motion } from 'framer-motion';
import { FaTrash } from 'react-icons/fa';

interface WorkoutListProps {
  workouts: Workout[];
  deleteWorkout?: (id: string) => void;
}

const WorkoutList: React.FC<WorkoutListProps> = ({ workouts, deleteWorkout }) => {
  return (
    <motion.div
      className="bg-surface p-6 rounded-lg shadow-md overflow-x-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-primary">Your Workouts</h2>
        {deleteWorkout && (
          <button className="text-danger hover:text-red-700 transition">
            <FaTrash />
          </button>
        )}
      </div>
      {workouts.length === 0 ? (
        <p className="text-onSurface">No workouts logged yet.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration (min)
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Calories Burned
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {workouts.map((workout) => (
              <tr key={workout.id} className="hover:bg-gray-100 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-onSurface">{workout.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-onSurface">{workout.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-onSurface">
                  {workout.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-onSurface">
                  {workout.caloriesBurned}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </motion.div>
  );
};

export default WorkoutList;
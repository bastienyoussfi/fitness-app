// src/components/WorkoutList.tsx
import React from "react";
import Workout from "../types/workout";
import { motion } from 'framer-motion';

interface WorkoutListProps {
  workouts: Workout[];
}

const WorkoutList: React.FC<WorkoutListProps> = ({ workouts }) => {
  return (
    <motion.div
      className="mt-6 overflow-x-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold mb-4">Your Workouts</h2>
      {workouts.length === 0 ? (
        <p className="text-gray-500">No workouts logged yet.</p>
      ) : (
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration (min)
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Calories Burned
              </th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <tr
                key={workout.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{workout.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{workout.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-700">
                  {workout.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-700">
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
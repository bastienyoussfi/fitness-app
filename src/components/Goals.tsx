// src/components/Goals.tsx
import React, { useState } from "react";
import Goal from "../types/goal";
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface GoalsProps {
  goals: Goal[];
  addGoal: (goal: Goal) => void;
}

const Goals: React.FC<GoalsProps> = ({ goals, addGoal }) => {
  const [type, setType] = useState('');
  const [target, setTarget] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newGoal: Goal = {
      id: uuidv4(),
      type,
      target,
      current: 0,
    };
    addGoal(newGoal);
    setType('');
    setTarget(0);
  };

  return (
    <motion.div
      className="bg-surface p-6 rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold text-primary mb-4">Set a Fitness Goal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-onSurface">Workout Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary focus:border-primary"
            placeholder="e.g., Running"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-onSurface">Target Duration (minutes per week)</label>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary focus:border-primary"
            min="0"
          />
        </div>
        <motion.button
          type="submit"
          className="flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPlus className="mr-2" />
          Add Goal
        </motion.button>
      </form>

      {/* Goals List */}
      <div className="mt-6">
        <h3 className="text-md font-semibold text-primary mb-2">Your Goals</h3>
        {goals.length === 0 ? (
          <p className="text-onSurface">No goals set yet.</p>
        ) : (
          <ul className="space-y-2">
            {goals.map((goal) => (
              <li key={goal.id} className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
                <div>
                  <p className="font-medium text-onSurface">{goal.type}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-accent h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${(goal.current / goal.target) * 100 > 100 ? 100 : (goal.current / goal.target) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-onSurface mt-1">
                    {goal.current} / {goal.target} minutes this week
                  </p>
                </div>
                {goal.current >= goal.target && (
                  <span className="text-green-600 text-xl">✓</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default Goals;
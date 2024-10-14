// src/components/Goals.tsx
import React, { useState } from 'react';
import Goal from '../types/goal';
import { v4 as uuidv4 } from 'uuid';

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
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Set a Fitness Goal</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-1">Workout Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g., Running"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Target Duration (minutes per week)</label>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
            required
            className="w-full border px-3 py-2 rounded"
            min="0"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Add Goal
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-md font-semibold mb-2">Your Goals</h3>
        {goals.length === 0 ? (
          <p>No goals set yet.</p>
        ) : (
          <ul>
            {goals.map((goal) => (
              <li key={goal.id} className="mb-2">
                <span className="font-medium">{goal.type}</span>: {goal.current} / {goal.target} minutes this week
                {goal.current >= goal.target && (
                  <span className="ml-2 text-green-600">✓</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Goals;
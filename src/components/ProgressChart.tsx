// src/components/ProgressChart.tsx
import React from 'react';
import Workout from '../types/workout';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

interface ProgressChartProps {
  workouts: Workout[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ workouts }) => {
  // Aggregate data by date
  const data = workouts.reduce<Record<string, any>>((acc, workout) => {
    if (!acc[workout.date]) {
      acc[workout.date] = { date: workout.date, duration: 0, calories: 0 };
    }
    acc[workout.date].duration += workout.duration;
    acc[workout.date].calories += workout.caloriesBurned;
    return acc;
  }, {});

  const chartData = Object.values(data).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="mt-6 bg-white p-6 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Workout Progress</h2>
      {chartData.length === 0 ? (
        <p>No data to display.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="duration" stroke="#8884d8" name="Duration (min)" />
            <Line type="monotone" dataKey="calories" stroke="#82ca9d" name="Calories Burned" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ProgressChart;

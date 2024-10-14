// src/context/AppContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import Goal from '../types/goal';
import Workout from '../types/workout';

interface AppContextProps {
  workouts: Workout[];
  addWorkout: (workout: Workout) => void;
  goals: Goal[];
  addGoal: (goal: Goal) => void;
  updateGoalsProgress: () => void;
}

export const AppContext = createContext<AppContextProps>({
  workouts: [],
  addWorkout: () => {},
  goals: [],
  addGoal: () => {},
  updateGoalsProgress: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);

  // Load from Local Storage on mount
  useEffect(() => {
    const storedWorkouts = localStorage.getItem('workouts');
    const storedGoals = localStorage.getItem('goals');
    if (storedWorkouts) setWorkouts(JSON.parse(storedWorkouts));
    if (storedGoals) setGoals(JSON.parse(storedGoals));
  }, []);

  // Save to Local Storage on change
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const addWorkout = (workout: Workout) => {
    setWorkouts((prev) => [...prev, workout]);
  };

  const addGoal = (goal: Goal) => {
    setGoals((prev) => [...prev, goal]);
  };

  const updateGoalsProgress = () => {
    // Example: Update weekly progress
    const currentWeekStart = new Date();
    currentWeekStart.setDate(currentWeekStart.getDate() - currentWeekStart.getDay()); // Start of week (Sunday)

    const weeklyWorkouts = workouts.filter((workout) => {
      const workoutDate = new Date(workout.date);
      return workoutDate >= currentWeekStart;
    });

    setGoals((prevGoals) =>
      prevGoals.map((goal) => {
        const totalDuration = weeklyWorkouts
          .filter((w) => w.type.toLowerCase() === goal.type.toLowerCase())
          .reduce((sum, w) => sum + w.duration, 0);
        return { ...goal, current: totalDuration };
      })
    );
  };

  // Update goals progress whenever workouts change
  useEffect(() => {
    updateGoalsProgress();
  }, [workouts]);

  return (
    <AppContext.Provider value={{ workouts, addWorkout, goals, addGoal, updateGoalsProgress }}>
      {children}
    </AppContext.Provider>
  );
};

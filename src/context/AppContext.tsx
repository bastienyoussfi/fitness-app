import React, { createContext, useState, useEffect } from "react";
import Goal from "../types/goal";
import Workout from "../types/workout";
import User from "../types/user";
import Achievement from "../types/achievement";
import { toast } from 'react-toastify';

interface AppContextProps {
  workouts: Workout[];
  addWorkout: (workout: Workout) => void;
  goals: Goal[];
  addGoal: (goal: Goal) => void;
  user: User;
  addXP: (amount: number) => void;
  levelUp: () => void;
  achievements: Achievement[];
}

const initialAchievements: Achievement[] = [
  {
    id: 'achv-1',
    name: 'First Workout',
    description: 'Log your first workout.',
    icon: '/achievements/first-workout.png',
    unlocked: false,
  },
  {
    id: 'achv-2',
    name: 'Consistency',
    description: 'Maintain a workout streak of 7 days.',
    icon: '/achievements/consistency.png',
    unlocked: false,
  },
];

export const AppContext = createContext<AppContextProps>({
  workouts: [],
  addWorkout: () => {},
  goals: [],
  addGoal: () => {},
  user: { id: "user-1", name: "Player", xp: 0, level: 1, streak: 0 },
  addXP: () => {},
  levelUp: () => {},
  achievements: initialAchievements,
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [user, setUser] = useState<User>({
    id: "user-1",
    name: "Player",
    xp: 0,
    level: 1,
    streak: 0,
  });

  // Load from Local Storage on mount
  useEffect(() => {
    const storedWorkouts = localStorage.getItem("workouts");
    const storedGoals = localStorage.getItem("goals");
    const storedUser = localStorage.getItem("user");
    if (storedWorkouts) setWorkouts(JSON.parse(storedWorkouts));
    if (storedGoals) setGoals(JSON.parse(storedGoals));
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Save to Local Storage on change
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const addWorkout = (workout: Workout) => {
    setWorkouts((prev) => [...prev, workout]);
    addXP(10); // Award XP for logging a workout
    updateStreak();
  };

  const addGoal = (goal: Goal) => {
    setGoals((prev) => [...prev, goal]);
  };

  const addXP = (amount: number) => {
    setUser((prev) => {
      const newXP = prev.xp + amount;
      return { ...prev, xp: newXP };
    });
  };

  const levelUp = () => {
    setUser((prev) => ({ ...prev, level: prev.level + 1 }));
    toast.success(`🚀 Congratulations! You've reached Level ${user.level + 1}!`);
  };

  const updateStreak = () => {
    const today = new Date().toISOString().split("T")[0];
    const lastWorkout = workouts[workouts.length - 1]?.date;

    if (lastWorkout === today) {
      // Already logged today
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    if (lastWorkout === yesterdayStr) {
      // Continue streak
      setUser((prev) => ({ ...prev, streak: prev.streak + 1 }));
    } else {
      // Reset streak
      setUser((prev) => ({ ...prev, streak: 1 }));
    }

    // Award XP for streak
    if (user.streak > 0 && user.streak % 7 === 0) {
      addXP(30); // Award XP for 7-day streak
    }
  };

  // Level-up logic based on XP thresholds
  useEffect(() => {
    const levelThresholds = [100, 250, 500, 1000]; // Example thresholds
    if (
      user.level - 1 < levelThresholds.length &&
      user.xp >= levelThresholds[user.level - 1]
    ) {
      levelUp();
      // Optionally, notify the user about the level-up
    }
  }, [user.xp]);

  useEffect(() => {
    const storedAchievements = localStorage.getItem('achievements');
    if (storedAchievements) setAchievements(JSON.parse(storedAchievements));
  }, []);
  
  // Save achievements to Local Storage on change
  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(achievements));
  }, [achievements]);
  
  const unlockAchievement = (id: string) => {
    setAchievements((prev) =>
      prev.map((achv) => (achv.id === id ? { ...achv, unlocked: true } : achv))
    );
    const achievement = achievements.find((a) => a.id === id);
    if (achievement) {
      toast.success(`🎉 Achievement Unlocked: ${achievement.name}`);
      addXP(20); // Reward for unlocking achievement
    }
  };
  
  // Example: Unlock 'First Workout' when a workout is added
  useEffect(() => {
    if (workouts.length >= 1 && !achievements.find((a) => a.id === 'achv-1')?.unlocked) {
      unlockAchievement('achv-1');
      addXP(20); // Reward for unlocking achievement
    }
  }, [workouts]);

  return (
    <AppContext.Provider
      value={{ workouts, addWorkout, goals, addGoal, user, addXP, levelUp, achievements }}
    >
      {children}
    </AppContext.Provider>
  );
};

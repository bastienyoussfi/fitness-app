interface Workout {
  id: string;
  date: string; // ISO format
  type: string;
  duration: number; // in minutes
  caloriesBurned: number;
}

export default Workout;
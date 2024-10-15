interface Goal {
  id: string;
  type: string;
  target: number; // e.g., minutes per week
  current: number;
}

export default Goal;

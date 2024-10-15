interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string; // URL or path to the icon image
  unlocked: boolean;
}

export default Achievement;

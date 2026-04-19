export interface Stage {
  id: string;
  title: string;
  subtitle: string;
  feel: string;
  focus: string;
  warning?: boolean;
}

export const stages: Stage[] = [
  {
    id: "01",
    title: "Ignition",
    subtitle: "The spark that starts everything",
    feel: "Excited, curious, free",
    focus: "Explore freely. Don't specialize yet."
  },
  {
    id: "02",
    title: "Awareness",
    subtitle: "Learning how the game really works",
    feel: "Engaged, sometimes overwhelmed",
    focus: "Build fundamentals. Accept correction."
  },
  {
    id: "03",
    title: "Momentum",
    subtitle: "Progress starts to feel real",
    feel: "Confident, motivated",
    focus: "Stay consistent. Build habits, not just results."
  },
  {
    id: "04",
    title: "Resistance",
    subtitle: "The wall every athlete must face",
    feel: "Frustrated, stuck, questioning",
    focus: "Don't quit. This is where growth lives.",
    warning: true
  },
  {
    id: "05",
    title: "Adaptation",
    subtitle: "The body and mind catch up",
    feel: "Tired, but things are resolving",
    focus: "Trust the process. Recovery is training."
  },
  {
    id: "06",
    title: "Commitment",
    subtitle: "The decision to go deeper",
    feel: "Clear, focused, sometimes isolated",
    focus: "Own your identity as an athlete."
  },
  {
    id: "07",
    title: "Competition",
    subtitle: "Testing against the best",
    feel: "Pressure, nerves, deep focus",
    focus: "Compete to learn. Results are feedback."
  },
  {
    id: "08",
    title: "Breakthrough",
    subtitle: "Something shifts permanently",
    feel: "Surprised, empowered, hungry",
    focus: "Understand what created it — then repeat."
  },
  {
    id: "09",
    title: "Identity",
    subtitle: "The athlete becomes the role",
    feel: "Grounded, purposeful",
    focus: "Lead from your identity. Your standard sets others'."
  },
  {
    id: "10",
    title: "Continuity",
    subtitle: "The long game is the only game",
    feel: "Mature, seasoned, invested",
    focus: "Give back. Keep growing differently."
  }
];

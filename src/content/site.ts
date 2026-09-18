export const tracks = [
  { number: "01", title: "Think in patterns", text: "Turn a big, intimidating problem into small, solvable moves.", tag: "FOUNDATIONS", tone: "lime" },
  { number: "02", title: "Build your toolkit", text: "Learn the data structures and algorithms that make ideas executable.", tag: "CRAFT", tone: "orange" },
  { number: "03", title: "Compete with purpose", text: "Practice under pressure, review together, and make progress visible.", tag: "ARENA", tone: "blue" },
] as const;

export const events = [
  { date: "OCT 04", type: "SEMINAR", title: "The anatomy of a good solution", meta: "Main auditorium · 4:00 PM" },
  { date: "OCT 18", type: "CONTEST", title: "CPC warm-up // round 01", meta: "Codeforces mirror · 90 min" },
] as const;

export const impactStats = [
  { value: "1,432", label: "problems solved" },
  { value: "03", label: "teams forming" },
  { value: "OCT 12", label: "next seminar" },
  { value: "01", label: "shared standard" },
] as const;

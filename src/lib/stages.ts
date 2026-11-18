// The ten stages of the product lifecycle used by the cards and the "How I build" tracer
export const STAGES = ['Discover', 'Understand', 'Define', 'Ideate', 'Prototype', 'Build', 'Launch', 'Adopt', 'Measure', 'Improve'] as const;
export type Stage = (typeof STAGES)[number];

// Stages grouped into phases, as on the tracer
export const PHASES: { name: string; stages: Stage[] }[] = [
  { name: 'Discovery', stages: ['Discover', 'Understand', 'Define'] },
  { name: 'Innovation', stages: ['Ideate', 'Prototype'] },
  { name: 'Delivery', stages: ['Build', 'Launch'] },
  { name: 'Growth', stages: ['Adopt', 'Measure', 'Improve'] },
];

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { STAGES } from './lib/stages';

// One Markdown file per case study in src/content/work
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),                 // one-line story on cards and the page hero
    tagline: z.string(),                  // meta description
    kind: z.enum(['enterprise', 'independent']),
    featured: z.boolean().default(false), // "Selected work" vs "More work"
    company: z.string(),
    role: z.string(),
    period: z.string(),
    status: z.enum(['Live', 'Shipped', 'In review', 'Client work']),
    order: z.number(),
    tags: z.array(z.string()).default([]),
    problem: z.string(),
    outcome: z.string(),
    stages: z.array(z.enum(STAGES)),
    link: z.string().url().optional(),
    stack: z.array(z.string()).default([]),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    beforeAfter: z.array(z.object({ area: z.string(), before: z.string(), after: z.string() })).default([]),
    flow: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
    swimlane: z.object({                  // diagram used where there are no screenshots (client work)
      lanes: z.array(z.string()),
      steps: z.array(z.object({ lane: z.number(), label: z.string(), short: z.string().optional() })),
    }).optional(),
    cover: z.string().optional(),
    video: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string(), phone: z.boolean().default(false) })).default([]),
    caveats: z.array(z.string()).default([]),
  }),
});

export const collections = { work };

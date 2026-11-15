// Reads seat counts from a registration-page screenshot with Claude.

import Anthropic from '@anthropic-ai/sdk';
import type { VisionResult } from '../src/lib/types';

const nullableInt = { anyOf: [{ type: 'integer' }, { type: 'null' }] };

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['location', 'classes', 'notes'],
  properties: {
    location: { anyOf: [{ type: 'string' }, { type: 'null' }], description: 'Training site shown on the page, if any.' },
    notes: { type: 'string', description: 'Anything unclear about the screenshot, or an empty string.' },
    classes: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['title', 'dates', 'time', 'seatsLeft', 'seatsTotal', 'soldOut'],
        properties: {
          title: { type: 'string', description: 'Class name as written, e.g. "Basic eRider (eMTC)" or "IRC".' },
          dates: { type: 'string', description: 'Class date(s) exactly as shown.' },
          time: { type: 'string', enum: ['AM', 'PM', ''], description: 'AM for a morning ride time, PM for afternoon, empty if not shown.' },
          seatsLeft: { ...nullableInt, description: 'Seats still available. 0 if sold out / full. null if not shown.' },
          seatsTotal: { ...nullableInt, description: 'Total seats if the page shows it, else null.' },
          soldOut: { type: 'boolean' },
        },
      },
    },
  },
} as const;

const PROMPT = `This is a screenshot of a motorcycle training school's class registration page (register.msi5.com).
List every class visible on the page with its dates, ride time (morning = AM, afternoon = PM) and how many seats are left.
"Sold Out", "Full" or "Waitlist only" means 0 seats left. Only report numbers you can actually read; use null when a number isn't shown.`;

export type VisionMediaType = 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';

export async function readSeatsFromScreenshot(apiKey: string, data: ArrayBuffer, mediaType: VisionMediaType): Promise<VisionResult> {
  const client = new Anthropic({ apiKey });
  const base64 = Buffer.from(data).toString('base64');
  const response = await client.beta.messages.create({
    model: 'claude-opus-5-5',
    max_tokens: 16000,
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    output_config: { format: { type: 'json_schema', schema: SCHEMA as unknown as Record<string, unknown> } },
    messages: [
      {
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64 } },
          { type: 'text', text: PROMPT },
        ],
      },
    ],
  });
  if (response.stop_reason === 'refusal') throw new Error('Claude declined to read this image.');
  if (response.stop_reason === 'max_tokens') throw new Error('The answer was cut off. Try a tighter screenshot of just the class list.');
  const text = response.content.flatMap((b) => (b.type === 'text' ? [b.text] : [])).join('');
  return JSON.parse(text) as VisionResult;
}

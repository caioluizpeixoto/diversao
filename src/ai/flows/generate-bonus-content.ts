'use server';

/**
 * @fileOverview A flow that generates bonus content ideas for a set of Christian-themed children's games.
 *
 * - generateBonusContent - A function that generates bonus content ideas based on the core games.
 * - GenerateBonusContentInput - The input type for the generateBonusContent function.
 * - GenerateBonusContentOutput - The return type for the generateBonusContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBonusContentInputSchema = z.object({
  gameTitles: z
    .array(z.string())
    .describe('A list of game titles for which to generate bonus content.'),
  ageRange: z
    .string()
    .optional()
    .describe('The age range of the children who will be using the bonus content.'),
});
export type GenerateBonusContentInput = z.infer<typeof GenerateBonusContentInputSchema>;

const GenerateBonusContentOutputSchema = z.object({
  bonusContentIdeas: z
    .array(z.string())
    .describe('A list of bonus content ideas to complement the core games.'),
});
export type GenerateBonusContentOutput = z.infer<typeof GenerateBonusContentOutputSchema>;

export async function generateBonusContent(input: GenerateBonusContentInput): Promise<GenerateBonusContentOutput> {
  return generateBonusContentFlow(input);
}

const bonusContentPrompt = ai.definePrompt({
  name: 'bonusContentPrompt',
  input: {schema: GenerateBonusContentInputSchema},
  output: {schema: GenerateBonusContentOutputSchema},
  prompt: `You are a creative assistant helping to generate bonus content ideas for Christian-themed children's games.

  Given the following game titles: {{gameTitles}}

  {% if ageRange %}The bonus content should be appropriate for children in the age range of {{ageRange}}.{% endif %}

  Generate a list of bonus content ideas that complement the core games and enhance the learning experience.
  The bonus content should be easy for parents to implement and should reinforce Christian values.

  Examples of bonus content ideas include:
  - Bible-themed coloring pages
  - Family Bible trivia questions
  - Printable Bible verse cards
  - Simple crafts related to Bible stories
  - Short, engaging devotionals for kids
  - Creative writing prompts based on Bible characters
  - Ideas for themed snacks to eat during game time.

  Return a list of strings.
  `,
});

const generateBonusContentFlow = ai.defineFlow(
  {
    name: 'generateBonusContentFlow',
    inputSchema: GenerateBonusContentInputSchema,
    outputSchema: GenerateBonusContentOutputSchema,
  },
  async input => {
    const {output} = await bonusContentPrompt(input);
    return output!;
  }
);

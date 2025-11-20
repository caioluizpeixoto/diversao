// Summarizes customer feedback to identify key themes and areas for improvement.
//
// - summarizeCustomerFeedback - A function that handles the summarization process.
// - SummarizeCustomerFeedbackInput - The input type for the summarizeCustomerFeedback function.
// - SummarizeCustomerFeedbackOutput - The return type for the summarizeCustomerFeedback function.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCustomerFeedbackInputSchema = z.object({
  feedback: z.string().describe('The customer feedback to summarize.'),
});

export type SummarizeCustomerFeedbackInput = z.infer<
  typeof SummarizeCustomerFeedbackInputSchema
>;

const SummarizeCustomerFeedbackOutputSchema = z.object({
  summary: z.string().describe('A summary of the customer feedback.'),
  themes: z.string().describe('Key themes identified in the feedback.'),
  areasForImprovement: z
    .string()
    .describe('Areas for product improvement based on the feedback.'),
});

export type SummarizeCustomerFeedbackOutput = z.infer<
  typeof SummarizeCustomerFeedbackOutputSchema
>;

export async function summarizeCustomerFeedback(
  input: SummarizeCustomerFeedbackInput
): Promise<SummarizeCustomerFeedbackOutput> {
  return summarizeCustomerFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCustomerFeedbackPrompt',
  input: {schema: SummarizeCustomerFeedbackInputSchema},
  output: {schema: SummarizeCustomerFeedbackOutputSchema},
  prompt: `You are a product manager summarizing customer feedback to identify key themes and areas for improvement.\n\nSummarize the following customer feedback, identify the key themes, and suggest areas for product improvement.\n\nFeedback: {{{feedback}}}`,
});

const summarizeCustomerFeedbackFlow = ai.defineFlow(
  {
    name: 'summarizeCustomerFeedbackFlow',
    inputSchema: SummarizeCustomerFeedbackInputSchema,
    outputSchema: SummarizeCustomerFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

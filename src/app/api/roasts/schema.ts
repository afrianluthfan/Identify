import { z } from 'zod';

export const roastsSchema = z.object({
  roastDetails: z.string().describe('Details of the roast per percentage'),
  overallRoast: z.string().describe('Overall roast based on the percentages'),
});

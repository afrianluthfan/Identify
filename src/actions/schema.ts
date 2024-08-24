import { z } from 'zod';

const roastsSchema = z.object({
  roastDetails: z
    .array(
      z.object({
        nameOfAudioFeature: z.string().describe('Name of the audio feature'),
        percentage: z.string().describe('Percentage of spotify audio features'),
        percentageRoast: z.string().describe('Roast based on the percentage'),
      }),
    )
    .describe('Details of the roast per percentage'),
  overallRoast: z.string().describe('Overall roast based on the percentages'),
  mainGenre: z
    .string()
    .describe("The person's favorite genre based on their audio features"),
});

export default roastsSchema;

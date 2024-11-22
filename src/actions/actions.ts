'use server';

import { streamObject } from 'ai';
import { google } from '@ai-sdk/google';
import { createStreamableValue } from 'ai/rsc';
import roastsSchema from '@/actions/schema';

export type RequestType = {
  valence: number;
  danceability: number;
  energy: number;
  acousticness: number;
  speechiness: number;
};

export const generateRoastRSC = async (
  input: RequestType,
  topGenre: string,
) => {
  'use server';

  const stream = createStreamableValue();

  (async () => {
    try {
      const { fullStream } = streamObject({
        model: google('models/gemini-1.5-flash-latest'),
        system:
          'You generate roasts for this Spotify user music taste with details from each percentage and overall roast.',
        schema: roastsSchema,
        prompt: `Look at them. Roast this person in the style of a british standup comedian with this music taste from Spotify, measured in percentage:
          ${input.danceability} Danceability, ${input.energy} Energy, ${input.acousticness} Acousticness, ${input.speechiness} Speechiness, and ${input.valence} Happiness.
          Their top genre is ${topGenre}.
          The overall roast should consist of five sentences.
          Roast them without mercy, don't pull any punches, and make them lose confidence in themselves.`,
      });

      for await (const part of fullStream) {
        switch (part.type) {
          case 'error': {
            const { error } = part;
            if (error instanceof Error) {
              stream.error(error.message);
            } else {
              stream.error('An unknown error occurred');
            }
            break;
          }
          case 'object': {
            stream.update(part.object);
            break;
          }
        }
      }
      stream.done();
    } catch (error) {
      if (error instanceof Error) {
        stream.error(error.message);
      } else {
        stream.error('An unknown error occurred');
      }
    }
  })();

  return { object: stream.value };
};

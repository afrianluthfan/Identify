/* eslint-disable default-case */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

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

export const generateRoastRSC = async (input: RequestType) => {
  'use server';

  const stream = createStreamableValue();

  (async () => {
    try {
      const { fullStream } = await streamObject({
        model: google('models/gemini-1.5-flash-latest'),
        system:
          'You generate roasts for this Spotify user music taste with details from each percentage and overall roast.',
        schema: roastsSchema,
        prompt: `Look at them. Roast this person with this kind of music taste from Spotify, measured in percentage:
          ${input.danceability} Danceability, ${input.energy} Energy, ${input.acousticness} Acousticness, ${input.speechiness} Speechiness, and ${input.valence} Happiness.
          State their top genre based on their audio features.
          The overall roast should consist of five sentences.
          Use emojis on every other sentences and internet slangs to add emphasis to the roast like a based gen-z or a gen alpha with brainrot would.
          Roast them without mercy, make them lose confidence in themselves.`,
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

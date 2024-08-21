/* eslint-disable default-case */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

'use server';

import { streamObject } from 'ai';
import { google } from '@ai-sdk/google';
import { createStreamableValue } from 'ai/rsc';
import roastsSchema from '@/actions/schema';

type Request = {
  valence: string;
  danceability: string;
  energy: string;
  acousticness: string;
  speechiness: string;
};

export const generateRoastRSC = async (input: Request) => {
  'use server';

  const stream = createStreamableValue();

  try {
    const { fullStream } = await streamObject({
      model: google('models/gemini-1.5-flash-latest'),
      system:
        'You generate roasts for this Spotify user music taste with details from each percentage and overall roast.',
      schema: roastsSchema,
      prompt: `Look at them. Roast this person with this kind of music taste from Spotify, measured in percentage:
        ${input.danceability} Danceability, ${input.energy} Energy, ${input.acousticness} Acousticness, ${input.speechiness} Speechiness, and ${input.valence} Happiness.`,
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
      stream.error(error.message); // Handle known error types
      return { error: error.message };
    }
    stream.error('An unknown error occurred'); // Handle unknown error types
    return { error: 'An unknown error occurred' };
  }
  return { object: stream.value };
};

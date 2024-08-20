import { google } from '@ai-sdk/google';
import { streamObject } from 'ai';
import { roastsSchema } from './schema';

type RequestBody = {
  valence: string;
  danceability: string;
  energy: string;
  acousticness: string;
  speechiness: string;
};

export const POST = async (req: Request) => {
  const {
    valence,
    danceability,
    energy,
    acousticness,
    speechiness,
  }: RequestBody = await req.json();

  const result = await streamObject({
    model: google('models/gemini-1.5-flash-latest'),
    system:
      'You generate roasts for this spotify user music taste with details from each percentage and overall roast.',
    schema: roastsSchema,
    prompt: `look at em. roast this person with this kind of music taste from spotify, measured in percentage:
    ${danceability} Danceability, ${energy} Energetic, ${acousticness} Acousticness, ${speechiness} Speechiness, and ${valence} Happiness
    `,
  });

  return result.toTextStreamResponse();
};

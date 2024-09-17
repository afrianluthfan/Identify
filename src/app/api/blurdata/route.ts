import { getPlaiceholder } from 'plaiceholder';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('imageUrl');

  if (!imageUrl) {
    return Response.json({ error: 'Image URL is required' }, { status: 400 });
  }

  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return Response.json({ base64 });
  } catch (error) {
    console.error('Error generating placeholder:', error);
    return Response.json(
      { error: 'Failed to generate placeholder' },
      { status: 500 },
    );
  }
}

export const GET = async () =>
  Response.json(
    {
      message: 'Server is OK',
    },
    { status: 200 },
  );

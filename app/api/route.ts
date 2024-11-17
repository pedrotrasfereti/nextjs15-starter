export async function GET() {
  return Response.json(
    JSON.stringify({ message: 'Hello World from Backend!'}),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}

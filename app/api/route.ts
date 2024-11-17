export async function GET() {
  return Response.json(
    { message: 'Hello World from Backend!'},
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}

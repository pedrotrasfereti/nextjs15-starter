// Two routes: GET and POST
import books from "@/app/api/books/db";

export async function GET() {
  return Response.json(books);
}

export async function POST(request: Request) {
  const book = await request.json();
  books.push(book);
  return Response.json(books);
}

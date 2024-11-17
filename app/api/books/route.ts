// Two routes: GET and POST
import books from "@/app/api/books/db";

export async function GET() {
  return Response.json(books);
}

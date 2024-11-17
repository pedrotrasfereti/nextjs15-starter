// Two routes: PUT and DELETE
import books from "@/app/api/books/db";

// Update request
export async function PUT(
  request: Request,
  context: { params: { id: string }},
) {
  const id = +context.params.id;
  const book = await request.json();

  const index = books.findIndex((b) => b.id === id);
  books[index] = book;

  return Response.json(books);
}

// Delete request
export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const id = +context.params.id;

  const index = books.findIndex((b) => b.id === id);
  books.splice(index, 1);
  return Response.json(books);
}

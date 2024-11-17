// Two routes: PUT and DELETE

  import books from "@/app/api/books/db";

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

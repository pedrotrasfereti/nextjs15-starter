import React from "react";

const Books = async () => {
  const response = await fetch("http://localhost:3000/api/books");
  const data = await response.json();

  return (
    <main>
      <h1 className="text-3xl font-black">Books</h1>

      <ul>
        {data.map((book: { id: number, title: string }) => (
          <li key={book.id}>{book.id}. {book.title}</li>
        ))}
      </ul>
    </main>
  )
};

export default Books;

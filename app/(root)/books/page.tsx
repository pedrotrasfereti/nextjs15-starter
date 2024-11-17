import React from "react";

const Books = async () => {
  const response = await fetch("http://localhost:3000/api/books");
  const data = await response.json();

  return (
    <main>
      <h1 className="text-3xl font-black">Books</h1>

      <code>{JSON.stringify(data)}</code>
    </main>
  )
};

export default Books;

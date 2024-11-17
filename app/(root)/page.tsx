import React from "react";

const Home = async () => {
  const response = await fetch("http://localhost:3000/api");
  const data = await response.json();

  return (
    <div>
      <h1 className="text-3xl font-black">Welcome to Next.js 15</h1>
      <h2 className="text-xl">{ data.message }</h2>
    </div>
  );
};

export default Home;

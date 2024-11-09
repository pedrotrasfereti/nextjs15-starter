import React from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <h1 className="text-3xl font-black">User Details Page</h1>

      <p>User: { id }</p>
    </div>
  );
};

export default Page;

import Link from 'next/link'
import React from 'react'

const Users = () => {
  return (
    <div>
      <h1 className="text-3xl font-black">Users</h1>

      <ul>
        <li><Link href="/dashboard/users/1">User 1</Link></li>
        <li><Link href="/dashboard/users/2">User 2</Link></li>
        <li><Link href="/dashboard/users/3">User 3</Link></li>
        <li><Link href="/dashboard/users/4">User 4</Link></li>
      </ul>
    </div>
  )
}

export default Users
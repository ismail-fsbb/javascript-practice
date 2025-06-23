// app/page.js
import Link from "next/link";

const users = [
  { id: 1, name: "Shaon" },
  { id: 2, name: "Tabassum" },
  { id: 3, name: "Ismail" },
  { id: 4, name: "Riyad" },
  // ...more users
];

export default function Blog() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">User List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} className="text-blue-600 hover:underline">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

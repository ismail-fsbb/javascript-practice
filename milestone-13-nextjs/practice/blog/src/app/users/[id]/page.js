// app/users/[id]/page.js

const users = [
    { id: 1, name: "Shaon", bio: "Loves hiking and tech." },
    { id: 2, name: "Tabassum", bio: "Book lover and artist." },
    { id: 3, name: "Ismail", bio: "Developer at heart." },
    { id: 4, name: "Riyad", bio: "Cybersecurity expert." },
  ];
  
  export default function UserDetails({ params }) {
    const user = users.find((u) => u.id.toString() === params.id);
  
    if (!user) {
      return <p>User not found</p>;
    }
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-600">{user.bio}</p>
      </div>
    );
  }
  
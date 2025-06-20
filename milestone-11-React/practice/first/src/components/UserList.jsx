import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);       
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching users:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📋 User List</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {users.map(user => (
            <li key={user.id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;

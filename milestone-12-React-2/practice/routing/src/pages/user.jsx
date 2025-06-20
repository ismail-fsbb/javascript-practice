import { useParams } from 'react-router-dom';

export default function User() {
  const { id } = useParams();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">User Profile</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

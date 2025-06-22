import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

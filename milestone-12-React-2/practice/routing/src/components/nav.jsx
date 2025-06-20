import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

export default function Nav() {
  return (
    <>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>

    <Routes>
        <Route path ="/" element={<Home />}></Route>
        <Route path ="/about" element={<About />}></Route>
        <Route path ="/contact" element={<Contact />}></Route>
    </Routes>
    </>
  );
}

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar flex">
      <h1 className="text-3xl font-bold text-gray-500 uppercase p-4 border-b border-gray-100 cursor-pointer hover:text-gray-700">Recipes</h1>
      <div className="links p-5">
        <Link className="btn text-lg" to="/">Home</Link>
        <Link className="btn ml-3 text-lg" to="/create">New Recipe</Link>
      </div>
    </nav>
  );
}

export default Navbar;
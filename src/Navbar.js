import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar flex bg-red-500">
      <h1 className="lg:text-3xl text-2xl font-bold text-yellow-200 uppercase p-4 border-b border-gray-100 cursor-pointer hover:text-yellow-300">Recipes</h1>
      <div className="links p-5">
        <Link className="btn lg:text-lg text-xs" to="/">Home</Link>
        <Link className="btn ml-3 lg:text-lg text-xs" to="/create">New Recipe</Link>
      </div>
    </nav>
  );
}

export default Navbar;
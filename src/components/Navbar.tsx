import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-between">
    <Link to="/" className="text-xl font-bold">Saree Grace</Link>
    <Link to="/cart" className="text-lg">🛒 Cart</Link>
  </nav>
);

export default Navbar;
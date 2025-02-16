import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="text-center mt-10">
    <h1 className="text-3xl font-semibold">Welcome to Saree Grace</h1>
    <p className="mt-2 text-gray-600">Find the best sarees in Bangalore!</p>
    <Link to="/products" className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded">Shop Now</Link>
  </div>
);

export default HomePage;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product:any) => (
        <Link key={product.id} to={`/product/${product.id}`} className="bg-white p-4 rounded shadow-md">
          <img src={product.image} alt={product.title} className="h-40 mx-auto" />
          <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
          <p className="text-pink-500 font-semibold">₹{product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductListing;

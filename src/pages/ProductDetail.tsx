import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct]:any = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img src={product.image} alt={product.title} className="w-1/2 mx-auto" />
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-pink-500 text-xl font-semibold">₹{product.price}</p>
        <p className="mt-4">{product.description}</p>
        <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;

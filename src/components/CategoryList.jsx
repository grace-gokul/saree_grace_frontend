import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const dataResponse = await response.json();
      setCategoryProduct(Array.isArray(dataResponse) ? dataResponse : []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Categories</h2>
      <div className="category-scroll-container d-flex overflow-auto gap-4 px-3">
        {loading
          ? [...Array(8)].map((_, index) => (
              <div key={index} className="category-item loading rounded-circle bg-secondary"></div>
            ))
          : categoryProduct.map((category, index) => (
              <Link key={index} to={`/product-category?category=${category.name}`} className="text-decoration-none text-dark">
                <div className="category-item text-center">
                  <div className="category-img-wrapper rounded-circle overflow-hidden bg-light" style={{ width: '100px', height: '100px' }}>
                    <img
                      src="https://res.cloudinary.com/dl7uzbgoc/image/upload/v1728567750/categories/pqdhykqu3n138m6cxcvw.jpg"
                      alt={category.name}
                      className="category-img w-100 h-100 object-fit-cover"
                      style={{ borderRadius: '50%' }}
                    />
                  </div>
                  <p className="mt-2 text-sm md:text-lg fw-semibold text-center text-nowrap">{category.name}</p>
                </div>
              </Link>
            ))}
      </div>
    </Container>
  );
};

export default CategoryList;
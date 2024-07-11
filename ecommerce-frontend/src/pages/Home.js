import React, { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import Filter from "../component/Filter";
import { getTopProducts } from "../services/api";
import { generateUniqueProductId } from "../utils";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "Laptop",
    minPrice: 1,
    maxPrice: 1000,
  });

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzA2ODEyLCJpYXQiOjE3MjA3MDY1MTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImFiYjgzMmE1LWFlZTUtNDNjOC1iMWYxLTNhZjRkYTVlMWE1NyIsInN1YiI6ImdhdXJhbnNoaWd1cHRhMjAwMEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJVbml2ZXJzaXR5IFNjaG9vbCBvZiBBdXRvbWF0aW9uIGFuZCBSb2JvdGljcyIsImNsaWVudElEIjoiYWJiODMyYTUtYWVlNS00M2M4LWIxZjEtM2FmNGRhNWUxYTU3IiwiY2xpZW50U2VjcmV0IjoiVHJJUE5oeU9JUHF1ZWZUQyIsIm93bmVyTmFtZSI6IkdhdXJhbnNoaSBHdXB0YSIsIm93bmVyRW1haWwiOiJnYXVyYW5zaGlndXB0YTIwMDBAZ21haWwuY29tIiwicm9sbE5vIjoiMDA3MTkwMTE5MjEifQ.DyFCV9SLZNxAoKc6YM-9RYp7y40E5moz4GW9pzoc-z4";

  const applyFilters = async () => {
    const company = "AMZ";
    try {
      const productsData = await getTopProducts(
        company,
        filters.category,
        filters.minPrice,
        filters.maxPrice,
        token
      );
      setProducts(
        productsData.map((product) => ({
          ...product,
          id: generateUniqueProductId(product, company),
        }))
      );
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    applyFilters();
  }, []);

  return (
    <div>
      <Filter
        filters={filters}
        setFilters={setFilters}
        applyFilters={applyFilters}
      />
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

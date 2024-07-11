// import React, { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import Filter from "../component/Filter";
import { getTopProducts } from "../services/api";
import { generateUniqueProductId } from "../utils";

import React, { useState, useEffect, useCallback } from "react";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "Laptop",
    minPrice: 1,
    maxPrice: 1000,
  });

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzA4MjQ1LCJpYXQiOjE3MjA3MDc5NDUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImE0NTg4NGUyLTg1MzEtNGZmNi04YTMzLWJlYWI5MjY4NTIzYyIsInN1YiI6InJpdHVqYWluYW5hbnQyODEwQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IkFGRk9SRE1FRCIsImNsaWVudElEIjoiYTQ1ODg0ZTItODUzMS00ZmY2LThhMzMtYmVhYjkyNjg1MjNjIiwiY2xpZW50U2VjcmV0IjoiTEdGZXFQT1pmeVJUZGhyRSIsIm93bmVyTmFtZSI6IkFuYW50IEphaW4iLCJvd25lckVtYWlsIjoicml0dWphaW5hbmFudDI4MTBAZ21haWwuY29tIiwicm9sbE5vIjoiMDcwMTkwMTE5MjEifQ.uLui-EAWvFdhaA_awhY6R3UfDmwsCsz4tm23faFZUGs";

  const applyFilters = useCallback(async () => {
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
  }, [filters, token]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  return (
    <div>
      <Filter
        filters={filters}
        setFilters={setFilters}
        applyFilters={applyFilters}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;


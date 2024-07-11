import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  return (
    <div>
      {product ? <ProductCard product={product} /> : <p>Product not found</p>}
    </div>
  );
};

export default ProductDetails;

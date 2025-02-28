import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 p-8 bg-[#ffffff] min-h-screen  justify-center items-center">
      {products &&
        products.length > 0 &&
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
    </div>
  );
};

export default ProductList;

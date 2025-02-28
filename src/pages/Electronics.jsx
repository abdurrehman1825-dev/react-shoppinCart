import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/product/ProductCard";
import { fetchProducts } from "../features/product/productSlice";

const Electronics = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log("beffor efffect", loading);
  useEffect(() => {
    if (products.length <= 0) {
      dispatch(fetchProducts());
    }
  }, []);
  console.log("after efffect", loading);
  const electronicsCollection = products.filter(
    (product) => product.category === "electronics"
  );
  if (loading == false) {
    return <p>Data is loading .......</p>;
  } else if (electronicsCollection <= 0 && loading === true) {
    return <p>No data matched found</p>;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4 place-items-center mx-auto">
      {electronicsCollection.length > 0 &&
        electronicsCollection.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Electronics;

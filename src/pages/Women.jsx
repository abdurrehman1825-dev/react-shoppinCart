import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/product/ProductCard";
import { fetchProducts } from "../features/product/productSlice";

const Women = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length <= 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const womenCollection = products.filter(
    (product) => product.category === "women's clothing"
  );
  if (loading == false) {
    return <p>Data is loading.......</p>;
  }
  if (womenCollection.length <= 0) {
    return <p>No matched item found</p>;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4 place-items-center mx-auto">
      {womenCollection.length > 0 &&
        womenCollection.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Women;

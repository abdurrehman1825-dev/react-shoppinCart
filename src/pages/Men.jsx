import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/product/ProductCard";
import { fetchProducts } from "../features/product/productSlice";

const Men = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length <= 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const menCollection = products.filter(
    (product) => product.category === "men's clothing"
  );
  if (loading == false) {
    return <p>Data is loading .......</p>;
  }
  if (menCollection <= 0) {
    return <p>No data matched found</p>;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4 place-items-center mx-auto">
      {menCollection.length > 0 &&
        menCollection.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Men;

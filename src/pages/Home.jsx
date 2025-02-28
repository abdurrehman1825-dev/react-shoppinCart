import ProductList from "../components/product/ProductList";
import HeroSection from "../components/HeroSection";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProducts()).finally(() => setIsLoading(false));
  }, [dispatch]);
  if (isLoading) {
    return <p>data is loading please waite........</p>;
  }
  return (
    <main className="w-screen min-h-screen  ">
      <div className="w-full h-[600px] mx-auto mt-12 flex justify-center items-center overflow-hidden">
        <HeroSection products={products} />
      </div>

      <div className="mt-6">
        <ProductList products={products} />
      </div>
    </main>
  );
};

export default Home;

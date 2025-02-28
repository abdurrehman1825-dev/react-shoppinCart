import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [query, setQuery] = useState("");
  const [filterProductData, setFilterProductData] = useState([]);
  const navigation = useNavigate();
  const { products, loading } = useSelector((state) => state.products);

  const filterProduct = (query) => {
    const searchData = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilterProductData(searchData);
  };

  const handleSerach = (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value == "") {
      setFilterProductData([]);
      return;
    }
    filterProduct(query);
  };

  const handlSlecte = (id) => {
    setQuery("");
    navigation(`/productDetail/${id}`);
    setFilterProductData([]);
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="search for items"
        className="absolute w-[300px] text-gray-500 border border-blue-500 bg-gray-50 h-8 rounded-lg px-8 
            items-center focus:ring-2 focus: outline-blue-500"
        value={query}
        onChange={handleSerach}
      />
      <CiSearch className=" relative w-8 top-[10px] px-1" />

      {filterProductData.length > 0 && (
        <ul className="absolute top-0 right-[-58px] bg-white border mt-8 max-h-60 overflow-y-auto w-[300px]">
          {filterProductData.map((product) => (
            <li
              key={product.id}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handlSlecte(product.id)}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;

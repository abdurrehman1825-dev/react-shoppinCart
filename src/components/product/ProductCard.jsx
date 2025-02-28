import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAdditem = (totalQuatity) => {
    dispatch(
      addItem({ id: product.id, totalQuatity, totalPrice: product.price })
    );
  };

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 mb-4 transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
          {product.title}
        </h2>
        <p className="text-gray-600 mt-2 line-clamp-3">{product.description}</p>
        <p className="text-lg font-bold text-green-600 mt-3">
          ${product.price}
        </p>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handleAdditem(1)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Add to Cart
          </button>

          <button
            onClick={() => navigate(`/productDetail/${product.id}`)}
            className="text-blue-500 hover:underline"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

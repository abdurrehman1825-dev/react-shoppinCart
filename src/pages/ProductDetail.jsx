import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addItem } from "../features/cart/cartSlice";
import { fetchSingleProduct } from "../features/product/productSlice";

const ProductDetail = () => {
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const singleItem = products.filter((product) => product.id == id);

  const handleAdditem = (item) => {
    dispatch(addItem({ id: item.id, totalQuatity: 1, totalPrice: item.price }));
  };

  //to fetch single item if the product is not already fetched (use in this case liek: http://localhost:5173/productDetail/3)
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  if (singleItem.length < 0) {
    return <p>No data found.......</p>;
  }
  return (
    <div className="w-full mx-auto">
      {singleItem &&
        singleItem.length > 0 &&
        singleItem.map((item) => (
          <div key={item.id} className="mx-auto">
            <div className="flex justify-center mt-10">
              <div className="w-[300px] h-[300px] border border-gray-100">
                {
                  <img
                    src={item.image}
                    alt="product Detial"
                    className="w-full h-full"
                  />
                }
              </div>
              <div className="ml-4 w-[700px]">
                <h1 className="font-serif font-bold text-black text-wrap ">
                  {item.title}
                </h1>
                <p className="mt-4">{item.description}</p>
                <p className="mt-4">
                  <strong>Category:</strong>
                  <span> {item.category}</span>
                  <span className="ml-4">
                    <strong>Price:</strong> ${item.price}
                  </span>
                  <span className="ml-4">
                    <strong>Rating:</strong> {item.rating.rate}
                  </span>
                  <span className="ml-4">
                    <strong>Count:</strong> {item.rating.count}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex mx-auto mt-4 justify-center ">
              <button
                onClick={() => handleAdditem(item)}
                className="w-[200px] pl-3 ml-[25px] bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigation("/")}
                className="w-[200px] ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
              >
                Back to home
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductDetail;

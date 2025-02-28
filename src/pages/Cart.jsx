import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  itemDelete,
} from "../features/cart/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { products, loading } = useSelector((state) => state.products);
  const subTotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const handleIncreaseQuantity = (id, price) => {
    dispatch(increaseItemQuantity({ id, price }));
  };
  const handleDecreaseQuantity = (id, price) => {
    dispatch(decreaseItemQuantity({ id, price }));
  };
  const handleItemDelete = (id) => {
    dispatch(itemDelete({ id }));
  };

  const closeCart = () => {
    navigate("/"); // Redirect to the homepage or any other route
  };
  const cartProducts = products.filter((product) =>
    items.some((item) => item.id == product.id)
  );
  return (
    <div className=" w-[1000px] mx-auto bg-white rounded-sm  mt-[50px] max-h-[800px]">
      <div className=" relative w-full">
        <div
          className="flex absolute  right-0 mr-2 text-black font-semibold cursor-pointer"
          onClick={closeCart}
        >
          <button className="p-1 text-[#454444] underline" onClick={closeCart}>
            Continue shopping
          </button>
        </div>
      </div>
      <div className="p-4 text-black">
        <h2 className="text-lg mb-4">Your Cart Items</h2>
      </div>
      <div className="p-4 m-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-300 ">
              <td className="pl-4 w-[70%]">Product</td>
              <td className="pl-4 w-[15%]">Quantity</td>
              <td className="pl-4 w-[15%]">Total</td>
            </tr>
          </thead>
          <tbody>
            {cartProducts &&
              cartProducts.length > 0 &&
              cartProducts.map((product) => {
                const singleItemInitems = items.find(
                  (item) => item.id == product.id
                );
                return (
                  <tr key={product.id} className="border border-gray-300">
                    <td className="text-center p-2">
                      <div className="flex">
                        <div className="w-[60px] h-[70px] p-4 flex relative border border-gray-100">
                          <img src={product.image} className="w-full h-full " />
                        </div>
                        <div className="mr-4">
                          <h1>{product.title}</h1>
                          <p className="absolute text-[#454444]">
                            Price: {product.price}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center p-2">
                      <div className="flex justify-between items-center gap-3">
                        <div className="w-[107px] border border-gray-400 p-2 justify-between">
                          <button
                            className="mr-4"
                            style={{
                              cursor:
                                singleItemInitems.totalQuatity <= 1
                                  ? "not-allowed"
                                  : "allowed",
                            }}
                            onClick={() =>
                              handleDecreaseQuantity(
                                singleItemInitems.id,
                                product.price
                              )
                            }
                          >
                            -
                          </button>
                          {singleItemInitems.totalQuatity}
                          <button
                            className="ml-4"
                            onClick={() =>
                              handleIncreaseQuantity(
                                singleItemInitems.id,
                                product.price
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <span
                          className="text-white bg-red-600 py-3 px-2"
                          onClick={() => handleItemDelete(singleItemInitems.id)}
                        >
                          <RiDeleteBin6Line />
                        </span>
                      </div>
                    </td>
                    <td className="text-center p-2">
                      Total: {product.price * singleItemInitems.totalQuatity}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="text-end p-4">
        <div>
          <p>
            subtotal: <strong>{subTotal}</strong>
          </p>
        </div>
        <div>
          <NavLink to="/checkout">
            <button className="w-[500px] bg-blue-500 text-white p-2 rounded mt-4 cursor-pointer border border-black hover:scale-105 transition-all">
              Check Out
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;

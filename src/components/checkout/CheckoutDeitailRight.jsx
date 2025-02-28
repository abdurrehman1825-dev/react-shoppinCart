import React from "react";
import { useSelector } from "react-redux";

const CheckoutDeitailRight = () => {
  const { items } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  console.log("items=", items);
  console.log("products=", products);
  const newProduct = products.filter((product) =>
    items.some((item) => item.id === product.id)
  );
  const combinedData = newProduct.map((product) => {
    const itemData = items.find((item) => item.id === product.id);
    return {
      ...product,
      ...itemData,
    };
  });
  const subTotal = combinedData.reduce((sum, item) => sum + item.totalPrice, 0);
  const itemCount = combinedData.length;
  console.log("combine = ", combinedData);
  return (
    <div className="mt-10 pl-4 pt-[8px] overflow-hidden">
      <div className="">
        {combinedData.map((product) => (
          <div className="flex border-b border-[#ebe0e0]  mb-2 box-border min-h-[100px]">
            <div key={product.id} className=" relative mb-3">
              <div className="absolute h-6 w-6 top-[-8px] right-[-8px] rounded-full bg-gray-900 z-10 border border-red-500 items-center text-center ">
                <span className="text-sm font-bold text-white">
                  {product.totalQuatity}
                </span>
              </div>
              <img
                src={product.image}
                alt="shopped image"
                className=" w-[60px] h-[60px] p-2 block border border-gray-400"
              />
            </div>
            <div className="flex justify-around ml-4 w-[80%]">
              <div className="w-[72%]">
                <p className="text-[#2a2a2a] font-serif size-[10px] text-wrap leading-tight text-ellipsis w-full h-[50%]">
                  {product.title}
                </p>
                <p className="text-[#4d4c4c] font-serif size-[10px] text-wrap text-ellipsis w-full">
                  <strong>category:</strong> {product.category}
                </p>
              </div>

              <div className="ml-12 w-[28%]">$:{product.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className=" mt-[20px]">
        <div className="mb-4">
          <div className="flex">
            <div className="w-[70%]">
              <span>
                <strong>subtotal:-</strong>
              </span>
              <span>{itemCount} items</span>
            </div>
            <div>
              <span className="mr-[120px] w-[70%]">
                $:{subTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex">
            <div className="w-[70%]">
              <span>
                <strong>Shipment Charges:-</strong>
              </span>
            </div>
            <div>
              <span className="mr-[100px]">$: 100</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="w-[70%]">
              <span>
                <strong>Total:-</strong>
              </span>
            </div>
            <div>
              <span className="mr-[100px]">$: {subTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDeitailRight;

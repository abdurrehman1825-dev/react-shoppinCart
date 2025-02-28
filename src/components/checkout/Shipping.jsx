import React from "react";

const Shipping = () => {
  return (
    <div>
      <h1 className="font-bold mb-4">Shipping Method</h1>
      <div className="gap-1">
        <label className="mb-2 float-start font-semibold">
          Shipping Charges
        </label>

        <input
          type="textarea"
          className="w-full rounded-lg p-2 bg-gray-50 text-end border border-blue-500 focus:outline-none focus:ring-2"
          placeholder=""
          value={"$ 1.00"}
        />
      </div>
      <div className="border border-black mt-4 p-4">
        <h2>Note:</h2>
        <p className="text-red-600">
          Orders valued at $ 15.00 & above require prepaid payment. Thank you!
        </p>
      </div>
    </div>
  );
};

export default Shipping;

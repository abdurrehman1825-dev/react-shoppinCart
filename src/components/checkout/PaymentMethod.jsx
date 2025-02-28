import React from "react";
import { useState } from "react";

import "react-country-state-city/dist/react-country-state-city.css";

const PaymentMethod = ({ paymentOnCash, setPaymentOnCash }) => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionChange = (section) => {
    setSelectedSection((prevSection) =>
      prevSection === section ? null : section
    );
    if (section === 3) {
      setPaymentOnCash(!paymentOnCash);
    }
  };
  return (
    <div className="relative top-20">
      <div className="">
        <h1 className="font-bold mb-4">payment</h1>
      </div>
      <div className="mt-4">
        <div className="">
          <div className="space-y-0">
            {/* Section 1 */}
            <div>
              <div
                className="flex justify-between items-center bg-blue-100 p-4 border border-gray-400 cursor-pointer"
                onClick={() => handleSectionChange(1)}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={selectedSection === 1}
                    onChange={() => handleSectionChange(1)}
                    className="border border-blue-950"
                  />
                  <label className="ml-4 cursor-pointer">
                    Debit - Credit Card (10% OFF on Paid Orders)
                  </label>
                </div>
                <div className="flex">
                  <img src="/src/assets/master.CzeoQWmc.svg" alt="image" />
                  <img src="/src/assets/visa.sxIq5Dot.svg" alt="image" />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  selectedSection === 1 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="bg-slate-100 p-4">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-252.3 356.1 163 80.9"
                      class="zjrzY"
                      className="w-[160px] h-[100px]"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="2"
                        d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"
                      ></path>
                      <circle
                        cx="-227.8"
                        cy="361.9"
                        r="1.8"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="-222.2"
                        cy="361.9"
                        r="1.8"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="-216.6"
                        cy="361.9"
                        r="1.8"
                        fill="currentColor"
                      ></circle>
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="2"
                        d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex justify-center">
                    <p className="px-8">
                      After clicking “Pay now”, you will be redirected to
                      complete your purchase securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <div
                className="flex justify-between items-center bg-blue-100 p-4 border border-gray-400 cursor-pointer"
                onClick={() => handleSectionChange(2)}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={selectedSection === 2}
                    onChange={() => handleSectionChange(2)}
                    className="border border-blue-950"
                  />
                  <label className="ml-4 cursor-pointer">
                    BaadMay | Buy Now. Pay Later
                  </label>
                </div>
                <div className="flex">
                  <img src="/src/assets/master.CzeoQWmc.svg" alt="image" />
                  <img src="/src/assets/visa.sxIq5Dot.svg" alt="image" />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  selectedSection === 2 ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="bg-slate-100 p-4">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-252.3 356.1 163 80.9"
                      class="zjrzY"
                      className="w-[160px] h-[100px]"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="2"
                        d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"
                      ></path>
                      <circle
                        cx="-227.8"
                        cy="361.9"
                        r="1.8"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="-222.2"
                        cy="361.9"
                        r="1.8"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="-216.6"
                        cy="361.9"
                        r="1.8"
                        fill="currentColor"
                      ></circle>
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="2"
                        d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex justify-center">
                    <p className="px-8">
                      After clicking “Pay now”, you will be redirected to
                      complete your purchase securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <div
                className="flex justify-between items-center bg-blue-100 p-4 border border-gray-400 cursor-pointer"
                onClick={() => handleSectionChange(3)}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={selectedSection === 3}
                    onChange={() => handleSectionChange(3)}
                    className="border border-blue-950"
                  />
                  <label className="ml-4 cursor-pointer">
                    Cash on Delivery (COD)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;

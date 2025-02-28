import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  CountrySelect,
  StateSelect,
  CitySelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import PaymentMethod from "../components/checkout/PaymentMethod";
import Shipping from "../components/checkout/Shipping";
import CheckoutDeitailRight from "../components/checkout/CheckoutDeitailRight";
const Checkout = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [paymentOnCash, setPaymentOnCash] = useState(true);

  return (
    <div className=" flex w-full mb-4">
      <div className="w-1/2 mt-10 ml-10">
        <div className="mr-2">
          <div className="flex justify-between">
            <h1>Contact</h1>
            <NavLink to="/login ">
              <p className="text-blue-500 underline">login</p>
            </NavLink>
          </div>
          <div className="mx-auto">
            <form className="mx-auto w-full">
              <div className="w-full">
                <label className="relative float-start font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg p-2 bg-gray-50 border border-blue-500 focus:outline-none focus:ring-2"
                />
              </div>
              <div className="w-fullmt-7 relative">
                <h1 className=" font-bold mb-4">Delivery</h1>
                <div className="">
                  <label className=" mt-4float-start font-semibold">
                    Countery Region
                  </label>
                  <div className="w-full  rounded-lg p-2 bg-gray-50 border border-blue-500 focus:outline-none focus:ring-2">
                    <CountrySelect
                      className="w-full rounded-lg p-2 bg-gray-50 border border-blue-500 focus:outline-none focus:ring-2"
                      value={selectedCountry}
                      onChange={(value) => {
                        setSelectedCountry(value);
                        setSelectedState(null); // Reset state and city when country changes
                        setSelectedCity(null);
                      }}
                      placeholder="Select a Country"
                    />
                    {selectedCountry && (
                      <StateSelect
                        className="w-full rounded-lg p-2 bg-gray-50 border border-blue-500 focus:outline-none focus:ring-2"
                        country={selectedCountry}
                        value={selectedState}
                        onChange={(value) => {
                          setSelectedState(value);
                          setSelectedCity(null); // Reset city when state changes
                        }}
                        placeholder="Select a State"
                      />
                    )}
                    {selectedState && (
                      <CitySelect
                        className="w-full rounded-lg p-2 bg-gray-50 border border-blue-500 focus:outline-none focus:ring-2"
                        country={selectedCountry}
                        state={selectedState}
                        value={selectedCity}
                        onChange={(value) => setSelectedCity(value)}
                        placeholder="Select a City"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex w-full] relative justify-between">
                <div className=" ">
                  <label className=" block float-start font-semibold mt-4">
                    First Name
                  </label>
                  <input className="w-[290px] absolute left-0 top-10 rounded-lg p-2 bg-gray-50 border border-blue-500 focus:outline-none focus:ring-2" />
                </div>
                <div>
                  <label className="absolute right-[34%] font-semibold mt-4">
                    Last name
                  </label>
                  <input className="w-[290px] absolute right-0 top-10 rounded-lg p-2 bg-gray-50 border border-blue-500 focus:outline-none focus:ring-2" />
                </div>
              </div>
              <div className="w-full relative top-[50px]">
                <label className=" float-start font-semibold">Address</label>
                <input
                  type="textarea"
                  className="w-full rounded-lg p-2 bg-gray-50 border border-blue-500 focus:outline-none focus:ring-2"
                />
              </div>
              <div className="w-full relative top-[54px]">
                <label className=" float-start font-semibold">Phone</label>
                <input
                  type="textarea"
                  className="w-full rounded-lg p-2 bg-gray-50 border border-blue-500 focus:outline-none focus:ring-2"
                />
              </div>
              <section>
                <div className="relative top-[60px] mt-4">
                  <Shipping />
                </div>

                <div className="relative to-20">
                  <PaymentMethod
                    paymentOnCash={paymentOnCash}
                    setPaymentOnCash={setPaymentOnCash}
                  />
                </div>
              </section>
              <div className=" mt-8 relative top-[50px]">
                {paymentOnCash ? (
                  <button className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 mb-4 cursor-pointer hover:scale-105 transition-all">
                    Pay Now
                  </button>
                ) : (
                  <button className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 mb-4 cursor-pointer hover:scale-105 transition-all">
                    Complete Order
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* cart details in checout at right site */}
      <div className="w-1/2  bg-slate-100">
        <CheckoutDeitailRight />
      </div>
    </div>
  );
};

export default Checkout;

import React from "react";
import NavBar from "./NavBar";
import { CiSearch } from "react-icons/ci";
import NavLogCart from "./NavLogCart";
import Log from "./Log";
import Search from "./Search";

export const Header = () => {
  return (
    <header className="flex  w-full justify-between items-center py-4 md: bg-white px-6 drop-shadow-lg top-0 z-50 sticky">
      <div className="w-[10%]">
        <Log />
      </div>
      <div className="hidden md:flex relative top-[-6px] items-center w-[20%] ml-3">
        <Search />
      </div>
      <div className="flex w-[50%] justify-center">
        <NavBar />
      </div>
      <div className="flex w-[20%] gap-3 justify-around">
        <NavLogCart />
      </div>
    </header>
  );
};

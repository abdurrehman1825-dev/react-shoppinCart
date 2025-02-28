import React from "react";

import { NavLink } from "react-router-dom";

const Log = () => {
  return (
    <>
      <NavLink to="/">
        <img
          src="/pakstyle-logo.jpg"
          className="w-[100px] hover:scale-105 transition-all cursor-pointer"
        />
      </NavLink>
    </>
  );
};

export default Log;

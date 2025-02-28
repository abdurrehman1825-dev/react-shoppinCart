import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const Links = [
    {
      name: "newArrivals",
      icon: "",
      path: "/newArrivals",
    },
    {
      name: "women",
      icon: "",
      path: "/women",
    },
    {
      name: "men",
      icon: "",
      path: "/men",
    },
    {
      name: "Jewelry",
      icon: "",
      path: "/Jewelry",
    },
    {
      name: "Electronics",
      icon: "",
      path: "/electronics",
    },
    {
      name: "summer collections",
      icon: "",
      path: "/summer-collections",
    },
  ];
  return (
    <nav className=" md:blockflex">
      <ul className="flex gap-4 list-none text-black">
        {Links.map((link, index) => (
          <NavLink key={index} to={link.path}>
            {" "}
            <li
              key={index}
              className="hover:bg-blue-500 rounded-md px-2 py-1 hover:text-white"
            >
              {link.name}
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

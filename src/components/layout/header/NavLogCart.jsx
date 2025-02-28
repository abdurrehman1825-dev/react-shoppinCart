import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { logout } from "../../../features/auth/authSlice";
import { CgProfile } from "react-icons/cg";

const NavLogCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isloggedIn } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  //s { totalQuatity } = items;
  const quatity = items.reduce((sum, item) => sum + item.totalQuatity, 0);
  const price = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const { users } = useSelector((state) => state.user);

  const handleProfile = () => {
    /*  if (user.id) {
      navigate(`/profile/${user.id}`);
    } */
  };

  const handleLogout = () => {
    dispatch(logout());
    console.log("logout is called");
  };
  return (
    <div className="relative flex items-center">
      <div className=" flex gap-4">
        <div>
          {isloggedIn ? (
            <button
              className=" flex items-center p-2 cursor-pointer rounded-md border hover:box-border border-blue-500 hover:bg-blue-500 hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login">
              <button className=" flex items-center p-2 cursor-pointer rounded-md border hover:box-border border-blue-500 hover:bg-blue-500 hover:text-white">
                Login
              </button>
            </NavLink>
          )}
        </div>
        <div className=" relative flex items-center p-2 px-[19px] rounded-md cursor-pointer border border-blue-500 hover:bg-blue-500 hover:text-white">
          <NavLink to="/cart">
            <CiShoppingCart />
          </NavLink>
          <sup className=" text-[#f8313bf8] absolute top-2 right-5 hover:text-white ">
            {quatity > 0 ? quatity : ""}
          </sup>
        </div>
      </div>
      <div className="absolute  min-w-[51px] top-[35px] left-10 ">
        Price: {price.toFixed(2)}
      </div>
      <button
        className="ml-10 w-10 h-10 rounded-full bg-gray-300  flex items-center justify-center hover:scale-105 hover:bg-blue-500 hover:text-white "
        onClick={handleProfile}
      >
        <CgProfile />
      </button>
    </div>
  );
};

export default NavLogCart;

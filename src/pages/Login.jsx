import React, { useEffect, useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userLogin } from "../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [typePasswrd, setTypePassword] = useState("password");
  const { isloggedIn, error } = useSelector((state) => state.auth);
  //toggle imput box to password and text type
  const togglePassword = () => {
    setTypePassword(!typePasswrd);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(loginFormData));
  };
  useEffect(() => {
    if (isloggedIn) {
      navigate("/");
    }
  }, [isloggedIn]);
  return (
    <div className="mx-auto items-center mt-20 pb-7 bg-white shadow-lg w-[700px] text-center text-black">
      <h1 className="text-2xl font-semibold">User Login</h1>
      <form onSubmit={handleLogin} className="mx-auto w-[500px]">
        <div className="w-[500px]">
          <label className="relative float-start font-semibold">
            Email/Mobile
          </label>
          <input
            required
            type="text"
            name="text"
            className="w-full rounded-lg p-2 bg-gray-50 border border-blue-500 focus:outline-none focus:ring-2"
            value={loginFormData.username}
            onChange={(e) =>
              setLoginFormData({ ...loginFormData, username: e.target.value })
            }
          />
        </div>
        <div className="w-[500px] relative">
          <label className="relative float-start font-semibold mt-4">
            Password
          </label>
          <input
            type={typePasswrd ? "password" : "text"}
            required
            name="password"
            className="w-full rounded-lg p-2 bg-gray-50 border border-blue-500 focus:outline-none focus:ring-2"
            value={loginFormData.password}
            onChange={(e) =>
              setLoginFormData({ ...loginFormData, password: e.target.value })
            }
          />
          <div
            onClick={togglePassword}
            className="absolute right-2 top-[52px] pr-4 cursor-pointer"
          >
            <FiEyeOff />
          </div>
        </div>
        <div className="text-end underline p-2">
          <a href="/">forget Password</a>
        </div>
        <div>
          <button
            type="submite"
            className="w-[500px] bg-blue-500 text-white p-2 rounded-lg mt-4 cursor-pointer hover:scale-105 transition-all"
          >
            Login
          </button>
        </div>
      </form>
      {error && <p className="text-red-600">{error}</p>}
      <div className="w-[500px] mx-auto items-center mt-4 rounded-md">
        <h3 className="text-xl p-4 mt-3 mb-3 bg-gray-100 ">----OR-----</h3>
        <div>
          <NavLink to="/register">
            <button className="w-[500px] bg-blue-500 text-white p-2 rounded-lg mt-4 cursor-pointer hover:scale-105 transition-all">
              Register New Account
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;

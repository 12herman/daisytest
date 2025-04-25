import React, { useEffect, useRef, useState } from "react";
import { navbarData } from "../staticData";
import { Link, useLocation } from "react-router-dom";
import Layout from "./Layout";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useAddCartContext } from "../context/AddCartContext";

export default function Nav() {
  const drawerToggle = useRef(null);
  const closeDrawer = () => drawerToggle.current ? (drawerToggle.current.checked = false) : null;
  const location = useLocation();

  // extra features
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "green";
  const [theme, setTheme] = useState(systemTheme);
  useEffect(
    () => document.documentElement.setAttribute("data-theme", theme),
    [theme]
  );
  const toggleTheme = () => {
    setTheme(theme === "green" ? "dark" : "green");
    document.documentElement.setAttribute("data-theme", theme);
  };

  const {cartdata} = useAddCartContext();

  return (
    <Layout>
      <section className="relative ">
      {/* pc Nav */}
      <div className="navbar max-w-screen-xl mx-auto bg-base-100 flex justify-between fixed top-0 z-[50] left-1/2 -translate-x-1/2">
        <div className="flex items-center lg:flex-1">
          <div className="drawer-content lg:hidden ">
            <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link to='/' className="btn btn-ghost text-xl">Simple Cart</Link>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1 flex items-center justify-between">
            {navbarData.map((data, i) => (
              <li key={i}>
                <Link
                  className={`${
                    location.pathname === data.link
                      ? " font-medium text-primary"
                      : ""
                  } hidden lg:block`}
                  to={data.link}
                >
                  {data.name}
                </Link>
              </li>
            ))}

        <li className="tooltip tooltip-bottom cursor-pointer" data-tip="Buy Now">
          <Link to="/addtocart">
          <label className="indicator relative cursor-pointer">
        <span className={`${cartdata.length > 0 ? 'badge' : ''} indicator-item  badge-sm badge-primary text-white`}>{cartdata.length > 0 ? cartdata.length: null}</span>
        <span className={`${cartdata.length > 0 ? 'absolute inline-flex h-6 w-6 rounded-full bg-primary opacity-75 animate-ping -top-1 -left-1 z-0' : 'hidden'}`}></span>
          <MdOutlineShoppingBag className={`${location.pathname === '/addtocart' ? "text-primary" :""}`} size={20}/>
          </label>
          </Link>
          </li>

            <li>
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  onClick={toggleTheme}
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />
                {/* sun icon */}
                <svg
                  className="swap-off h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>

      {/* mobile Nav */}
      <div className="drawer z-[50]">
        <input
          ref={drawerToggle}
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
          <Link to='/' className="btn btn-ghost text-xl flex items-center place-content-start">Simple Cart</Link>
           
            {navbarData.map((data, i) => (
              <li key={i}>
                <Link
                  className={`${
                    location.pathname === data.link
                      ? " font-medium text-primary"
                      : ""
                  } `}
                  onClick={closeDrawer}
                  to={data.link}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </Layout>
  );
}

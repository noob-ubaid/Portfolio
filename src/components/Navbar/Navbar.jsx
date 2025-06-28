import React from "react";
import Container from "../../shared/Container";

const Navbar = () => {
  const links = (
    <div className="flex items-center flex-col md:flex-row  gap-6 md:gap-8">
      <a className="font-medium  text-main text-lg" href="">
        <li>Home </li>
      </a>
      <a className="font-medium  text-main text-lg" href="">
        <li>About </li>
      </a>
      <a className="font-medium  text-main text-lg" href="">
        <li>Skills </li>
      </a>
      <a className="font-medium  text-main text-lg" href="">
        <li>Projects </li>
      </a>
      <a className="font-medium  text-main text-lg" href="">
        <li>Certificate </li>
      </a>
    </div>
  );
  return (
    <Container>
      <div className="navbar py-2">
        <div className="navbar-start">
          <div className="dropdown hover:bg-gray-800">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {links}
            </ul>
          </div>
          <a className=" text-xl">UR</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-main">Contact</a>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

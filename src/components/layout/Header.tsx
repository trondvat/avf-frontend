import React from "react";
import logo from "assets/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (): JSX.Element => {
  return (
    <div>
      <nav className="flex items-center bg-avf-black py-6 px-10 md:px-28 h-24">
        <img src={logo} className="max-h-full max-w-full" alt="Logo" />
        <button className="nav-bar" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="nav-arrow h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>

          <Link className="header-link" to="/">
            Test
          </Link>
          <Link className="header-link" to="/">
            Test
          </Link>
          <Link className="header-link" to="/">
            Test
          </Link>
          <Link className="header-link" to="/">
            Test
          </Link>
        </button>
      </nav>
      <hr className="mx-10 border-avf-red border-2 rounded-sm" />
    </div>
  );
};

export default Header;

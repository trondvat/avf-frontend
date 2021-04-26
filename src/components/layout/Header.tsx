import React from "react";
import logo from "assets/logo.svg";

const Header = (): JSX.Element => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-avf-black p-6 px-28 h-24">
        <img src={logo} className=" max-h-full max-w-full" alt="Logo" />
      </nav>
      <hr className="mx-10 border-avf-red border-2 rounded-sm" />
    </div>
  );
};

export default Header;

import React from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="w-full h-[100px] flex  justify-between px-8 items-center max-sm:px-4 max-sm:gap-x-[2px] ">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood  className="w-[30px] h-[30px] text-green-600"/>
      </div>

      <form className="w-[60%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-lg ">
        <FaSearch className="text-green-500 w-5 h-5" />
        <input type="text" placeholder="Search Items..." className="w-[100%] outline-none text-[20px]"/>
      </form>

      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative">
        <span className="absolute top-0  right-2 text-green-500 font-bold text-[18px]">0</span>
        <FaShoppingBag  className="w-[30px] h-[30px] text-green-600"/>
      </div>
    </div>
  );
};

export default Nav;

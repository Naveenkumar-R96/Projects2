import React from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="w-full h-[100px] flex  justify-between px-8 items-center ">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md">
        <MdFastfood  className="w-[30px] h-[30px] text-green-600"/>
      </div>

      <form action="">
        <FaSearch />
        <input type="text" placeholder="Search Items..." />
      </form>

      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md">
        <FaShoppingBag  className="w-[30px] h-[30px] text-green-600"/>
      </div>
    </div>
  );
};

export default Nav;

import React, { useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import { dataContext } from "../Pages/Context";
import { food_items } from "../../food";
const Nav = ({yes,setYes}) => {
  let { input, setInput ,cate,setCate,totalItems} = useContext(dataContext);
  useEffect(()=>{
    const updatedItems = cate.filter((item) => {
      return item.food_name.toLowerCase().includes(input.toLowerCase());
    });
    setCate(updatedItems);
    if (input === '') {
      setCate(food_items)
    }
  },[input])
  return (
    <div className="w-full h-[100px] flex  justify-between px-8 items-center max-sm:px-4 max-sm:gap-x-[2px] ">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-600" />
      </div>

      <form className="w-[60%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-lg " onSubmit={(e)=>e.preventDefault()}>
        <FaSearch className="text-green-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search Items..."
          className="w-[100%] outline-none text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative" onClick={()=>setYes(true)}>
        <span className="absolute top-0  right-2 text-green-500 font-bold text-[18px]">
          {totalItems}
        </span>
        <FaShoppingBag className="w-[30px] h-[30px] text-green-600" />
      </div>
    </div>
  );
};

export default Nav;

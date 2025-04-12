import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiMenu5Line } from "react-icons/ri";
import Responsive from "./Responsive";

const Nav = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="bg-black text-">
        <div className="nav_container flex w-[100%] mx-auto py-6 max-sm:justify-around justify-evenly px-5 ">
          <motion.div
            className="nav_logo 
          "
          initial={{x:'-100vh'}}
          animate={{x:0}}
          transition={{
            duration:0.5
          }}
          >
            <h1 className="text-3xl text-[#f3eeee] tracking-wide max-sm:text-[30px]  ">
              NaveenKumar
            </h1>
          </motion.div>
          <motion.div
            className="nav_links text-2xl max-sm:hidden px-4 rounded-full border-2 border-[#c5c3c3] hover:border-[#cbc9c9] transition duration-150 hidden md:block "
            initial={{ y: "50vw" }}
            animate={{ y: 0 }}
            transition={{
              duration:0.6
            }}
          >
            <ul className="flex gap-5 text-[#818181] item-center ">
              <li>
                <Link
                  to="/"
                  className="link hover:text-[#e4e0e0] transition duration-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="link hover:text-[#e4e0e0] transition duration-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="link hover:text-[#e4e0e0] transition duration-500"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="link hover:text-[#e4e0e0] transition duration-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.button className="btn border-2 border-[#818181] text-[#cac4c4] rounded-lg px-4 text-[20px] hover:border-white"
          initial={{x:'100vw'}}
          animate={{x:'0'}}
          transition={{duration:0.4}}
          >
            <Link to="contact">Let's Talk</Link>
          </motion.button>
          <div className="md:hidden">
            <RiMenu5Line
              className="text-white text-2xl mt-2 duration-800 transition-transform"
              onClick={() => setopen(!open)}
              style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
            />
          </div>
        </div>
        <Responsive open={open} setopen={setopen}/>
      </div>
    </>
  );
};

export default Nav;

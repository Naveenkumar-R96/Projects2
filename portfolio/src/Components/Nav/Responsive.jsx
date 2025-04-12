import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Responsive = ({open,setopen}) => {
  return (
    <div className="text-white">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 ,y:-100}}
            animate={{ opacity: 1 ,y:0}}
            exit={{ opacity: 0 }}
            className="absolute top-20 left-0 w-full h-screen z-20"
          >
            <div
           
            className="text-xl  uppercase bg-white text-black py-5  rounded-3xl z-20">
              <motion.ul 
               initial={{x:'100vw'}}
               animate={{x:0}}
               transition={{
                duration:0.7
               }}
              className="flex flex-col justify-center items-center gap-5 tracking-wide" >
                <Link to="/" ><li onClick={()=>setopen(false)}>Home</li></Link>
                <Link to='about'><li onClick={()=>setopen(false)}>About</li></Link>
                <Link to='work'><li onClick={()=>setopen(false)}>Projects</li></Link>
                <Link to='contact'><li onClick={()=>setopen(false)}>Contact</li></Link>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Responsive;

import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import robo1 from "../../assets/img/robo3.jpg";
import "./About.css";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
const App = () => {
 const specificDivRef = useRef(null);

  useEffect(() => {
    // Initialize VanillaTilt on the specific `div` element
    if (specificDivRef.current) {
      VanillaTilt.init(specificDivRef.current, {
        scale: 1,
        speed: 1000,
        max: 20, // Max tilt angle
        glare: true, // Enable glare effect
        "max-glare": 0.3, // Max glare opacity
      });
    }

    // Cleanup: Destroy VanillaTilt when the component unmounts
    return () => {
      if (specificDivRef.current?.vanillaTilt) {
        specificDivRef.current.vanillaTilt.destroy();
      }
    };
  }, []);
  /*  ref={specificDivRef} */
  return (
    <>
      <div className="bg-black min-h-screen relative">
        <motion.h1 className="text-white absolute -top-9 left-1 text-[100px] z-10 opacity-55"
        initial={{x:'100vw'}}
        animate={{x:0}}
       transition={{duration:0.7}}
        >
          Hover...
        </motion.h1>
        <div className="w-[80%] flex justify-center m-auto gap-3 flex-wrap">
          <motion.div
            className=" w-[30%] mb-4 bg-cover -z-1 "
           
          >
            <img src={robo1} alt="" className="items max-sm:w-[250px] mt-10" />
          </motion.div>
          <motion.div
            className=" bg-white w-[60%]  mb-4 p-8 mt-7 rounded-lg flex justify-center items-center flex-col z-10 max-md:w-[100%]  max-xl:text-2xl"
            ref={specificDivRef}
           /*</div>  initial={{ opacity: 0,  }}
            animate={{
             // scale: [1, ],
              
              borderRadius: ["50px", "50px", "0", "50px", "50px"],
              opacity: 1,/*
             
            }}/*
            transition={{
              duration: 2,
              ease: "easeInOut",
             

              scale: { type: "spring", visualDuration: 0.4 },
              repeatDelay: 1,
            }} */
          >
            <div className="text ">
              <h1 className="text-black text-5xl text-center mb-4 max-sm:text-[24px]">
                About Me
              </h1>
              <p className="text-xl max-sm:text-[19px] opacity-75">
                I am an Electronics and Communication Engineering (ECE) student
                with a passion for technology and innovation. My journey in the
                tech world led me to explore front-end development, where I
                gained proficiency in React and built several projects to
                enhance my skills. <br /> <br />I enjoy crafting user-friendly
                and visually appealing interfaces while staying up-to-date with
                the latest trends in web development. Beyond coding, my
                background in ECE provides me with a strong foundation in
                problem-solving and technical design, enabling me to approach
                development challenges creatively.
              </p>
              <p className="mt-3 text-2xl">
                Let’s create something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default App;

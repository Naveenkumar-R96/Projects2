import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { BsPersonWorkspace, BsTwitterX } from "react-icons/bs";
import { PiCertificateLight } from "react-icons/pi";
import { GiFallingStar } from "react-icons/gi";
import man from "../../assets/img/man3.jpg";
import pc from "../../assets/img/pc.png";
import { useRef } from "react";
import Footer from "../Footer/Footer";
const Home = () => {
  const items = [
    "React",
    "JavaScript",
    "Framer Motion",
    "Tailwind",
    "Bootstrap",
    "TypeScript",
    "CSS",
    "HTML",
    "Github",
  ];
  const ref = useRef(null);
  const isInView = useInView(ref); //
  return (
    <>
      <div className="bg-black h-[100%] min-h-screen">
        <div className="home w-[100%] mx-auto py-[30px] px-[40px] max-sm:px-[20px]">
          <div className="top-container flex flex-wrap max-sm:flex-nowrap max-sm:gap-3 justify-evenly items-center ">
            <motion.div
              className="left-container py-[20px] px-[20px] relative rounded w-[60%] flex justify-center max-sm:w-auto items-center"
              initial={{ x: "50%", y: "50%" }}
              animate={{ x: 0, y: 0 }}
              transition={{
                duration: 0.3,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center items-center image-container py-5 px-5 w-[200px] h-[200px] bg-[#323232] rounded-lg mr-8 max-sm:hidden max-md:hidden">
                <div className="img-box h-[100%] w-[100%] rounded-lg flex justify-center items-center bg">
                  <img src={man} alt="" className="rounded-2xl" />
                </div>
              </div>
              <Link to="/about">
                <div className="detail-container hover:text-white duration-500 flex flex-col justify-centermax-sm:mt-0 ">
                  <div>
                    <p className="text-[#818181] text-2xl max-sm:text-[18px] blink">
                      A Web Developer
                    </p>
                    <p className="text-[42px] text-white tracking-wide font-medium hover:text-white max-sm:text-3xl font-Jersey blink animate-glow ">
                      NaveenKumar
                    </p>
                    <p className="text-[#818181] tracking-[1px] font-semibold max-sm:text-sm text-2xl blink">
                      A React Frontend Developer
                    </p>
                    <div className="icon">
                      <FaAngleDoubleRight className="max-sm:text-[20px] absolute right-5 bottom-1 text-[#818181] text-3xl transition duration-500 hover:text-white ml-[80%] max-sm:ml-[80%] md:mt-8" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* -----------------------------contact---------------------- */}

            <motion.div
              className=" hover:translate-x-4 duration-500 contact-container text-white w-[30%] h-auto p-4 max-sm:w-[40%] max-sm:h-auto "
              initial={{ y: "100vw" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-evenly text-4xl mt-4 max-sm:mt-1 max-sm:text-2xl ">
                <a href="https://github.com/Naveenkumar-R96">
                  <FaGithub className="bg-white text-black rounded-full hover:bg-[#8b8989] hover:rounded-full hover:p-2" />
                </a>
                <a href="https://www.linkedin.com/in/naveen-kumar-1361252b7/">
                  {" "}
                  <FaLinkedin className="hover:bg-[#8b8989] hover:rounded-full hover:p-2" />
                </a>
                <a href="https://x.com/NaveenKumar__96">
                  <BsTwitterX className="cursor-pointer hover:bg-[#8b8989] hover:rounded-full hover:p-2" />
                </a>
              </div>
              <h3 className="uppercase text-xl text-[#818181] mt-3 ml-3 max-sm:text-xl max-sm:ml-1 text-center ">
                Contact with me
              </h3>
              <h1 className="text-4xl tracking-wider ml-3 max-sm:text-2xl max-sm:ml-1 text-center">
                Profiles{" "}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* ----------------projects---------------------- */}

        <section className="mid-container max-w-[90%] m-auto">
          <div className="flex justify-evenly max-sm:flex-wrap">
            <motion.div
              className="mid-box w-auto h-auto flex flex-col justify-center items-center p-[30px] pb-5 mt-4 max-sm:w-[75%] max-sm:mb-4"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.4,
              }}
              whileHover={{ scale: 1.05 }}
            >
              {" "}
              <Link to="work">
                <div className="icon-box">
                  <BsPersonWorkspace className="text-white text-[100px]" />
                </div>
                <div className="mid-details flex justify-start">
                  <div className="mid-info">
                    <p className="uppercase text-[#bebdbd] text-xl mt-3 max-sm:text-xl">
                      Major Works
                    </p>
                    <p className="text-3xl text-white max-sm:text-2xl mb-2">
                      Projects
                    </p>
                  </div>
                  <div className="mid-icon">
                    <FaAngleDoubleRight className="max-sm:text-[20px] text-[#818181] text-3xl transition duration-500 hover:text-white mt-[80%] ml-[80%]" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* --------------floating----------------------- */}

            <motion.div
              className="right-container ml-5 w-[70%] py-[30px] px-[30px] max-sm:w-full max-sm:ml-0 max-sm:px-[10px]"
              initial={{ y: "-100vw" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.5,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <div className="top-box w-[100%] px-[20px] py-[10px] text-center text-[#6c6c6c] uppercase text-[20px] max-sm:text-[16px]">
                  <p>Fields that can work with</p>
                </div>
                <div className="bottom-box mt-6 flex w-full">
                  <div className="box w-full p-7">
                    <div
                      className="scrol"
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        width: "auto",
                      }}
                    >
                      <motion.div
                        style={{
                          display: "flex",
                          gap: "40px",
                          fontSize: "24px",
                          fontWeight: "bold",
                        }}
                        animate={{
                          x: [0, -1000],
                        }}
                        transition={{
                          repeat: Infinity,
                          ease: "linear",
                          duration: 9,
                        }}
                      >
                        {items.concat(items).map((word, index) => (
                          <div
                            key={index}
                            style={{
                              padding: "10px 20px",
                              background: "#f0f0f0",
                              borderRadius: "8px",
                              color: "#333",
                            }}
                          >
                            {word}
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          className="flex mt-9 justify-around gap-2 max-w-[90%] m-auto flex-wrap "
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* ----------------------Achievements--------------------- */}

          <Link to="credential">
            <motion.div
              className="specialization max-[700px]:w-auto h-[200px] flex gap-5 justify-center p-5 max-sm:w-auto max-sm:h-[180px] max-sm:mb-4 relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="icons-container mt-7 text-white text-[90px] max-sm:text-[50px]">
                <PiCertificateLight />
              </div>
              <div>
                <h3 className="text-2xl text-[#818181] mt-6 max-md:text-xl">
                  Achievements
                </h3>
                <h1 className="text-white mt-2 text-4xl max-sm:text-3xl ">
                  Credential
                </h1>
                <FaAngleDoubleRight className="max-sm:text-[20px] text-[#818181] text-3xl transition duration-500 hover:text-white absolute bottom-5 right-6" />
              </div>
            </motion.div>
          </Link>

          {/* --------------------works experinece-------------------------- */}

          <motion.div
            className="projects w-[40%] h-[200px] bg-gradient-to-r from-[#383737] to-[#181818] rounded-lg flex justify-evenly max-sm:w-[60%] items-center max-sm:h-auto p-3 max-[980px]:w-[60%]"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={pc}
              alt=""
              className="w-[200px] h-[100%] max-sm:w-[80px] max-sm:h-[80px] rounded-lg"
              style={{ filter: "contrast(0)" }}
            />
            <Link to="internship">
              <div>
                <h3 className="text-[#818181] text-2xl mt-5 ">Works</h3>
                <h1 className="text-4xl text-white max-sm:text-2xl ">
                  Internships and Experience
                </h1>
                <FaAngleDoubleRight className="max-sm:text-[20px] text-[#818181] text-3xl transition duration-500 hover:text-white ml-[80%] mt-2" />
              </div>
            </Link>
          </motion.div>

          {/* -------------------------Work together------------------------------ */}

          <motion.div
            className="talk w-[20%] bg-gradient-to-r from-[#383737] to-[#181818] rounded-lg h-auto max-sm:w-[30%] max-sm:h-auto max-sm:mt-4 max-[980px]:w-[70%] max-md:mt-2 text-center relative max-w-[40%]"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="contact">
              <GiFallingStar className="text-white mt-5 ml-4  text-3xl max-sm:text-2xl absolute top-0 " />
              <h1 className=" text-3xl text-white mt-[50px] p-4 max-sm:text-2xl max-sm:p-2  max-[380px]:text-[18px]">
                Lets Work Together{" "}
                <span>
                  <FaAngleDoubleRight className="max-sm:text-[20px] text-[#818181] text-3xl transition duration-500 hover:text-white ml-[70%] max-sm:text-xl mb-2 absolute bottom-3 right-6 max-sm:bottom-3" />
                </span>
              </h1>
            </Link>
          </motion.div>
        </motion.section>
        <Footer />
      </div>
    </>
  );
};

export default Home;

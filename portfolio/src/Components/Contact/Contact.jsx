import React, { useState } from "react";
import { IoMailUnread } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { TiLocation } from "react-icons/ti";
import "./Contact.css";
import { input } from "framer-motion/client";
import robo from "../../assets/img/robo1.jpg";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
const Contact = () => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  let Name, value;
  const input = (e) => {
    Name = e.target.name;
    value = e.target.value;
    setData({ ...data, [Name]: value });
  };
  const sendData = async (e) => {
    const { Name, Email, Subject, Message } = data;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    };
    const fetchData = await fetch(
      "https://naveen-portfolio-31-default-rtdb.firebaseio.com/Message.json",
      options
    );
    console.log(fetchData);
  };
  return (
    <>
      <div>
        <div className="contact bg-black text-white py-5  w-full min-h-screen max-sm:h-auto max-md:h-auton flex justify-center items-center relative h-auto">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={robo}
              alt=""
              className="max-sm:w-[150px] absolute bottom-0 max-sm:-right-0 right-0 -z-1 item w-[300px]"
            />
          </motion.div>

          <div className="contacting-container max-w-full flex flex-wrap justify-center items-center z-10">
            <motion.div
              className="rightu  px-7 py-7"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              <h2 className="text-3xl">Message Me</h2>
              <form
                action=""
                method="POST"
                className="form flex flex-col w-[600px] gap-3 max-md:w-auto text-xl max-sm:text-[20px]"
              >
                <input
                  type="text"
                  onChange={input}
                  name="Name"
                  value={data.Name}
                  placeholder="Name"
                  className="border-5 rounded-full px-5 py-5 bg-black mt-5 "
                />
                <input
                  type="text"
                  onChange={input}
                  name="Email"
                  value={data.Email}
                  placeholder="Email"
                  className="border-5 rounded-full px-5 py-5 bg-black"
                />
                <input
                  type="text"
                  onChange={input}
                  name="Subject"
                  value={data.Subject}
                  placeholder="Subject"
                  className="border-5 rounded-full px-5 py-5 bg-black"
                />
                <textarea
                  id=""
                  onChange={input}
                  name="Message"
                  value={data.Message}
                  placeholder="Message"
                  className="border-5 rounded-lg px-5 py-5 bg-black "
                ></textarea>
                <button
                  type="submit"
                  onClick={sendData}
                  className="mt-4 bg-black px-3 py-3 rounded-lg  hover:bg-white hover:text-black duration-700"
                >
                  {" "}
                  Send
                </button>
              </form>
            </motion.div>

            <motion.div
              className="left-  py-5 px-7 w-[30%] max-sm:w-auto"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
              }}
            >
              <h1 className="text-2xl uppercase tracking-wider">
                Contact Information
              </h1>
              <div className="infoo mt-3 text-xl ">
                <div className="infoo-box ">
                  <div className="icons">
                    <IoMailUnread />
                  </div>
                  <div className="details text-[20px] max-sm:text-[20px]">
                    <h4 className="">Mail Me</h4>
                    <p>nk946432@gmail.com</p>
                  </div>
                </div>
                <div className="infoo-box flex items-center">
                  <div className="icons">
                    <LuPhoneCall />
                  </div>
                  <div className="details text-2xl max-sm:text-[20px]">
                    <h4>Contact Me</h4>
                    <p>+91 9344049020</p>
                  </div>
                </div>
                <div className="infoo-box flex items-center">
                  <div className="icons">
                    <TiLocation />
                  </div>
                  <div className="details text-2xl max-sm:text-[20px]">
                    <h4>Location</h4>
                    <p> V.Nagar 18 Rasipuram</p>
                    <p> TamilNadu </p>
                    <p> India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

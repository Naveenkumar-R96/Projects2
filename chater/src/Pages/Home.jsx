import React from "react";
import "../App.css";
import { RiImageAddLine, RiImageLine } from "react-icons/ri";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <nav>
        <div className="logo">Smart Ai Bot</div>
      </nav>
      <div className="hero">
        <span id="tag">What can i help with you ? </span>
        <div className="cate">
          <div className="upImg">
            <RiImageAddLine className="icon" />
            <span>Upload image</span>
          </div>
          <div className="getImg">
            <RiImageLine className="icon"/>
            <span>Get image</span>
          </div>
          <div className="chat">
            <MdOutlineMarkUnreadChatAlt className="icon" />
            <span>Lets chat</span>
          </div>
        </div>

        
      </div>

      <form action="" className="input-box">
        <button className="add"><FiPlus className="ico"/>
        </button>
        <input type="text" placeholder="Ask something..." />
        <button className="submit"><FaArrowUp className="ico"/>
        </button>
      </form>
     
    </div>
  );
};

export default Home;

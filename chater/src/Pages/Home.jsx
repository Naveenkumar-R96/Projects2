import React from "react";
import "../App.css";
import { RiImageAddLine, RiImageLine } from "react-icons/ri";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import Chat from "./Chat";
import { useContext } from "react";
import { dataContext } from "../contents/UserContext";
const Home = () => {
  let {
    startRes,
    setStartRes,
    popUp,
    setPopUp,
    input,
    setInput,
    feature,
    setFeature,
    prevInput,
    setPrevInput,
  } = useContext(dataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStartRes(true);
    setPrevInput(input);
    setInput("");
    
  };
  return (
    <div className="home">
      <nav>
        <div className="logo">Smart Ai Bot</div>
      </nav>
      {!startRes ? (
        <div className="hero">
          <span id="tag">What can i help with you ? </span>
          <div className="cate">
            <div className="upImg">
              <RiImageAddLine className="icon" />
              <span>Upload image</span>
            </div>
            <div className="getImg">
              <RiImageLine
                className="icon"
                onClick={() => setFeature("genImg")}
              />
              <span>Get image</span>
            </div>
            <div className="chat">
              <MdOutlineMarkUnreadChatAlt
                className="icon"
                onClick={() => setFeature("chat")}
              />
              <span>Lets chat</span>
            </div>
          </div>
        </div>
      ) : (
        <Chat />
      )}

      <form
        action=""
        className="input-box"
        onSubmit={(e) => {
          e.preventDefault();
          if (input) {
            handleSubmit(e);
          }
        }}
      >
        {popUp ? (
          <div className="pop-up">
            <div className="select-up">
              <RiImageAddLine className="icon" />
              <span>Upload image</span>
            </div>
            <div className="select-up" onClick={() => setFeature("genImg")}>
              <RiImageLine className="icon" />
              <span>Get image</span>
            </div>
          </div>
        ) : null}

        <div className="add" onClick={() => setPopUp((prev) => !prev)}>
          {feature === "genImg" ? (
            <RiImageLine className="ico" id="genImg"/>
          ) : (
            <FiPlus className="ico" />

          )}
        </div>
        <input
          type="text"
          placeholder="Ask something..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        {input ? (
          <button className="submit">
            <FaArrowUp className="ico" />
          </button>
        ) : null}
      </form>
    </div>
  );
};

export default Home;

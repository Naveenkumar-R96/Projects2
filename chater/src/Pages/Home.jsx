import React, { useContext } from "react";
import "../App.css";
import { RiImageAddLine, RiImageLine } from "react-icons/ri";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import Chat from "./Chat";
import { dataContext } from "../contents/UserContext";
import { user, prevUser } from "../contents/UserContext";
import { generateResponse } from "../gemini";
import { query } from "../huggingFace";

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
    showResult,
    setShowResult,
    prevFeature,
    setPrevFeature,
    genImgUrl,
    setGenImgUrl,
  } = useContext(dataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStartRes(true);
    setInput("");

    console.log(feature);
    setPrevFeature(feature);
    setFeature("chat");

    prevUser.data = user.data;
    prevUser.mime_type = user.mime_type;
    prevUser.imgUrl = user.imgUrl;
    prevUser.prompt = input;
  

    console.log(prevUser);

    let result = await generateResponse();
    setShowResult(result);

    user.data = null;
    user.mime_type = null;
    user.imgUrl = null;
  };

  const handleImage = (e) => {
    setFeature("upImg");
    let file = e.target.files[0];

    let reader = new FileReader();
    reader.onload = (e) => {
      let base64 = e.target.result.split(",")[1];

      user.data = base64;
      user.mime_type = file.type;

      user.imgUrl = `data:${user.mime_type};base64,${user.data}`;

      alert("image uploaded successfully, ask what you want to know");
    };

    reader.readAsDataURL(file);
  };

  const handleGenerateImg = async (e) => {
    setStartRes(true);
    setPrevFeature(feature);
    prevUser.prompt = input;
    setInput("");
    setGenImgUrl("");
    setFeature("chat");

    let result = await query().then((e) => {
      let url = URL.createObjectURL(e);
      console.log(url);
      console.log(e);
      setGenImgUrl(url);
      console.log(genImgUrl);
    });
  };

  return (
    <div className="home">
      <nav>
        <div
          className="logo"
          onClick={() => {
            setStartRes(false);
            setFeature("chat");
          }}
        >
          Smart Ai Bot
        </div>
      </nav>

      <input
        type="file"
        accept="image/*"
        hidden
        id="inputImg"
        onChange={handleImage}
      />
      {!startRes ? (
        <div className="hero">
          <span id="tag">What can I help with you?</span>
          <div className="cate">
            <div
              className="upImg"
              onClick={() => {
                document.getElementById("inputImg").click();
                setFeature("upImg");
              }}
            >
              <RiImageAddLine className="icon" />
              <span>Upload image</span>
            </div>
            <div className="getImg" onClick={() => {setFeature("genImg");setPrevFeature("genImg");console.log(feature)}}>
              <RiImageLine className="icon" />
              <span>Get image</span>
            </div>
            <div className="chat" onClick={() => setFeature("chat")}>
              <MdOutlineMarkUnreadChatAlt className="icon" />
              <span>Let's chat</span>
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
            console.log(feature);
            if (feature === "genImg") {
              handleGenerateImg();
              console.log("yes");
            } else {
              handleSubmit(e);
            }
          }
        }}
      >
        {popUp ? (
          <div className="pop-up">
            <div
              className="select-up"
              onClick={(e) => {
                setPopUp(false);
                setFeature("upImg");
                document.getElementById("inputImg").click();
              }}
            >
              <RiImageAddLine className="icon" />
              <span>Upload image</span>
            </div>

            <div className="select-up" onClick={() => {setFeature("genImg");setPopUp(false)}}>
              <RiImageLine className="icon" />
              <span>Get image</span>
            </div>
          </div>
        ) : null}

        <div className="add" onClick={() => setPopUp((prev) => !prev)}>
          {feature === "genImg" ? (
            <RiImageLine className="icon" id="genImg" />
          ) : feature === "upImg" ? (
            <RiImageAddLine className="icon" />
          ) : (
            <FiPlus className="ico" />
          )}
        </div>
        <input
          type="text"
          placeholder="Ask something..."
          onChange={(e) => {setInput(e.target.value); showResult && setShowResult("")}}
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

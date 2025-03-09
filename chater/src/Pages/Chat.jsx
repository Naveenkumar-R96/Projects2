import React, { useContext } from "react";
import { dataContext, prevUser } from "../contents/UserContext";

const Chat = () => {
  const { input, setInput, prevInput, setPrevInput, showResult, setShowResult, feature, setFeature, prevFeature, setPrevFeature, genImgUrl, setGenImgUrl } = useContext(dataContext);

  return (
    <div className="chat-page">
      <div className="user">
        {prevFeature === "upImg" ? (
          <>
            {prevUser.imgUrl ? <img src={prevUser.imgUrl} alt="" /> : <span>No image available</span>} <span>{prevUser.prompt}</span>
          </>
        ) : (
          <span>{prevUser.prompt}</span>
        )}
      </div>
      <div className="ai">
        {prevFeature === "genImg" ? (
          <>
            {genImgUrl ? <img src={genImgUrl} className="genImage" alt="Generated" /> : <span>Generating image.. </span>}
          </>
        ) : (
          !showResult ? <span>Loading...</span> : <span>{showResult}</span>
        )}
      </div>
    </div>
  );
};

export default Chat;

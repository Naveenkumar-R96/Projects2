import React from "react";
import { useContext } from "react";
import { dataContext, prevUser } from "../contents/UserContext";
const Chat = () => {
  let { input, setInput, prevInput, setPrevInput, showResult, setShowResult,feature,setFeature ,prevFeature,setPrevFeture} =
    useContext(dataContext);
  return (
    <div className="chat-page">
      <div className="user">
        {prevFeature == "upImg" ? (
          <>
            <img src={prevUser.imgUrl} alt="" /> <span>{prevUser.prompt}</span>{" "}
          </>
        ) : (
          <span>{prevUser.prompt}</span>
        )}
      </div>
      <div className="ai">
      {prevFeature == "genImg" ? (
          <>
            <img src={prevUser.imgUrl} alt="" /> {!showResult ? <span>Loading..</span> : <span>{showResult}</span>}
          </>
        ) : (
          !showResult ? <span>Loading..</span> : <span>{showResult}</span>
          
        )}
      </div>
    </div>
  );
};

export default Chat;

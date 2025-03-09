import React from "react";
import { useContext } from "react";
import { dataContext, prevUser } from "../contents/UserContext";
const Chat = () => {
  let { input, setInput, prevInput, setPrevInput, showResult, setShowResult,feature,setFeature ,prevFeature,setPrevFeture,genImgUrl,setGenImgUrl} =
    useContext(dataContext);
    console.log(prevFeature)
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
            {!genImgUrl ? <span>Generating imgage...</span> : <img src={genImgUrl} alt="" className="genic" />}
          </>
        ) :<>
          {!showResult ? <span>Loading..</span> : <span>{showResult}</span>}
          {console.log("no")}
        </>}
      </div>
    </div>
  );
};

export default Chat;

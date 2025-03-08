import React, { createContext, useState } from "react";
export const dataContext = createContext();
const UserContext = ({ children }) => {

    let [startRes,setStartRes]=useState(false);
    let [popUp,setPopUp]=useState(false);
    let [input,setInput]=useState('');
    let [feature,setFeature]=useState('chat')
    let [prevInput,setPrevInput]=useState('');
    let value={
        startRes,setStartRes
        ,popUp,setPopUp,
        input,setInput,
        feature,setFeature,
        
    }
  return (
    <div>
      <dataContext.Provider value={value}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;

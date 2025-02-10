import React, { createContext, useState } from "react";
import { food_items } from "../../food";
export const dataContext = createContext();

const Context = ({ children }) => {

  const [addItem,setAddItem] = useState([])

  const total=addItem.reduce((acc,curr)=>acc+curr.food_quantity*curr.price,0)
 
  const totalItems=addItem.length

 


  const addingItem=(item)=>{
    setAddItem([...addItem,item])
    const alertBox = document.createElement("div");
    alertBox.innerText = "Item Added to Cart";
    alertBox.style.position = "fixed";
    alertBox.style.top = "20px";
    alertBox.style.right = "100px";
    alertBox.style.backgroundColor = "#4CAF50";
    alertBox.style.color = "white";
    alertBox.style.padding = "10px";
    alertBox.style.borderRadius = "5px";
    alertBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    document.body.appendChild(alertBox);
    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  }




  const deleteItem=(item)=>{
    const updatedItems=addItem.filter((it)=>it.id!==item.id)
    setAddItem(updatedItems)
  }

  const increaseItem=(item,count)=>{
    setAddItem((prev)=>{
      return(
        prev.map((ite)=>(
          ite.id===item.id ? {...ite,food_quantity:ite.food_quantity+count} : ite
        ))
      )
    })
  }



  let [input, setInput] = useState('')
  let [cate,setCate] = useState(food_items)
  const [yes,setYes] = useState(false)
  let data = {
    input,
    setInput,
    cate,
    setCate,
    addingItem,
    addItem,
    setAddItem,
    deleteItem,
    total,
    totalItems,
    increaseItem,
    yes,
    setYes
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default Context;

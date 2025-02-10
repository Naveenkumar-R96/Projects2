import React, { useContext, useState } from "react";
import Nav from "../Components/Nav";
import Category from "../Components/Category";
import Card from "../Components/Card";
import { food_items } from "../../food";
import { dataContext } from "./Context";
import { ImCross } from "react-icons/im";
import Card2 from "../Components/Card2";

const Home = () => {
  const { cate, setCate, input } = useContext(dataContext);

  const filteration = (Category) => {
    if (Category === "All") {
      setCate(food_items);
    } else {
      const updatedItems = food_items.filter((item) => {
        return item.food_category === Category;
      });
      setCate(updatedItems);
    }
    console.log(cate);
  };

  const [yes,setYes] = useState(false)

  return (
    <div className=" bg-slate-200 w-full min-h-screen">
      <Nav yes={yes} setYes={setYes} />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {Category.map((item) => {
            return (
              <div
                className="w-[140px] h-[150px] bg-white flex flex-col  items-center gap-3 hover:bg-green-200 p-5 justify-center text-[20px] font-semibold text-gray-600 rounded-lg shadow-md cursor-pointer transition-all duration-500"
                onClick={() => filteration(item.name)}
                key={item.id}
              >
                {item.name} {item.icon}
              </div>
            );
          })}
        </div>
      ) : null}
      <div className="w-full flex flex-wrap gap-5 justify-center items-center mt-5">
        {cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>

      {yes ? (
        <div
          className={` max-md:w-full w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-lg p-6 transition-transform duration-1000 ${
            yes ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <header className="w-[100%] flex justify-between items-center ">
            <span className="text-green-400 text-[18px] font-semibold">
              Order Items
            </span>
            <ImCross
              className="text-green-400 text-[18px] font-semibold w-5 h-5 cursor-pointer hover:text-black duration-500"
              onClick={() => setYes(false)}
            />
          </header>
          <Card2/>
        </div>
      ) : null}
    </div>
  );
};

export default Home;

import React from "react";
import Nav from "../Components/Nav";
import Category from "../Components/Category";
import Card from "../Components/Card";
import { food_items } from "../../food";
const Home = () => {
  return (
    <div className=" bg-slate-200 w-full min-h-screen">
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
        {Category.map((item) => {
          return (
            <div className="w-[140px] h-[150px] bg-white flex flex-col  items-center gap-3 hover:bg-green-200 p-5 justify-center text-[20px] font-semibold text-gray-600 rounded-lg shadow-md cursor-pointer transition-all duration-500">
              {item.name} {item.icon}
            </div>
          );
        })}
      </div>
      
      <div className="w-full flex flex-wrap gap-5 justify-center items-center mt-5">
        {food_items.map((item) => (
          <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        ))}
      </div>
    </div>
  );
};

export default Home;

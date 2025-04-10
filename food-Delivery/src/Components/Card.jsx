import React from "react";
import { dataContext } from "../Pages/Context";
import { useContext } from "react";
const Card = ({ name, image, id, price, type, item }) => {
  const { addingItem, addItem } = useContext(dataContext);
  return (
    <div className=" ">
      <div className="w-[280px] h-auto max-h-[380px] min-h-[280px] bg-white p-2 mb-2 rounded-lg shadow-lg ">
        <img src={image} alt={name} className="w-[100%] h-[200px]" />
        <div className="flex justify-between items-center px-4 mt-2">
          <h1 className="text-lg font-semibold">{name}</h1>
          <h1 className="text-lg font-semibold">Rs-{price}</h1>
        </div>
        <div>
          <h1 className="ml-4 mt-2 text-green-500 font-semibold">{type}</h1>
          <button
            className="bg-green-300 w-full rounded-lg mt-3 p-3 text-gray-600 font-semibold hover:bg-green-400"
            onClick={() => addingItem(item)}
            disabled={addItem.includes(item)}
          >
            {addItem.includes(item) ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

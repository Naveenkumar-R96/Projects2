import React from "react";
import image1 from "../assets/image1.avif";
import { IoTrashBin } from "react-icons/io5";
import { useContext } from "react";
import { dataContext } from "../Pages/Context";
import { useState } from "react";
import Form from "../Pages/Form";
const Card2 = () => {
  const { addItem, deleteItem, total, increaseItem } = useContext(dataContext);
  console.log(addItem);

  const [form, setForm] = useState(false);
  return (
    <>
      {addItem.length === 0 && (
        <h1 className="text-center mt-10 text-green-400 text-3xl font-bold">
          No Item in Cart
        </h1>
      )}
      {addItem.map((item) => (
        <div className="w-full h-[150px] shadow-lg p-2 flex justify-between items-center">
          <div className="w-[60%] h-full  flex gap-5">
            <div className="w-[60%] h-full rounded-lg flex justify-center items-center p-2">
              <img src={item.food_image} alt="" className="object-contain" />
            </div>
            <div className="w-[40%] h-full flex flex-col gap-5 p-2 ">
              <div className=" text-gray-600 font-semibold text-sm">
                {item.food_name}
              </div>
              <div className="w-[110px] flex h-[50px] bg-slate-400 rounded-lg overflow-hidden shadow-lg text-green-700 font-bold border-2 border-green-400">
                <button
                  className="w-[30%] h-full bg-white hover:bg-slate-200"
                  onClick={() => {
                    if (item.food_quantity <= 1) {
                      deleteItem(item);
                    } else {
                      increaseItem(item, -1);
                    }
                  }}
                >
                  -
                </button>
                <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center ">
                  {item.food_quantity}
                </span>
                <button
                  className="w-[30%] h-full bg-white  hover:bg-slate-200"
                  onClick={() => {
                    increaseItem(item, 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-end gap-6">
            <span className="text-green-400 font-semibold ">
              Rs {item.price} /-
            </span>
            <IoTrashBin
              className="text-red-400 text-2xl"
              onClick={() => deleteItem(item)}
            />
          </div>
        </div>
      ))}
      {addItem.length === 0 ? null : (
        <h1 className="text-center mt-10 text-green-400 text-3xl font-bold">
          Total = {total} Rs /-
        </h1>
      )}
      {addItem.length === 0 ? null : (
        <div className="flex justify-center">
          {" "}
          <button
            className="bg-green-300 rounded-lg px-3 py-2 text-xl font-semibold text-gray-600 align-middle mt-4 hover:bg-green-400 hover:text-white"
            onClick={() => setForm(true)}
          >
            Place Order
          </button>
        </div>
      )}

      {form && (
        <div className="w-[40vw] bg-white fixed top-0 right-0 h-[100%] max-md:w-full">
          <Form setForm={setForm} />
        </div>
      )}
    </>
  );
};

export default Card2;

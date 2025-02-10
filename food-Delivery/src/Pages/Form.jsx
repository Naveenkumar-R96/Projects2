import React, { useContext, useState } from "react";
import { dataContext } from "./Context";
import { ImCross } from "react-icons/im";


const Form = ({ setForm }) => {
  const { setYes } = useContext(dataContext);

  const [value, setValue] = useState(false);
  const handleConfirm = () => {
    setValue(true);
   
   

  };
  return (
    <>
      <div className="bg-gray-200 h-full">
        <div className="flex justify-center items-center h-[80%]  p-4">
          <form action="" className="bg-white p-5 w-full rounded-xl shadow-lg">
            <div className="flex flex-col gap-3 justify-between items-center">
              <h1 className="text-3xl text-green-500 font-semibold text-center p-4">
                Address
              </h1>
              <label
                htmlFor="buildingName"
                className="uppercase font-semibold text-green-500"
              >
                Building Name
              </label>
              <input
                type="text"
                id="buildingName"
                placeholder="Murugan"
                className="border-2 border-green-300 block w-full py-2 rounded-lg text-center focus:outline-none"
              />
              <label
                htmlFor="street"
                className="uppercase font-semibold text-green-500"
              >
                Street
              </label>
              <input
                type="text"
                id="street"
                placeholder="Kumar Street"
                className="border-2 border-green-300 block w-full py-2 rounded-lg text-center focus:outline-none"
              />
              <label
                htmlFor="area"
                className="uppercase font-semibold text-green-500"
              >
                Area
              </label>
              <input
                type="text"
                id="area"
                placeholder="Rasipuram"
                className="border-2 border-green-300 block w-full py-2 rounded-lg text-center focus:outline-none"
              />
              <label
                htmlFor="city"
                className="uppercase font-semibold text-green-500"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Namakkal"
                className="border-2 border-green-300 block w-full py-2 rounded-lg text-center focus:outline-none"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-between px-5">
          <button
            className="bg-red-400 px-4 py-2 text-white text-xl font-medium rounded-lg "
            onClick={() => setForm(false)}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 px-4 py-2 text-white text-xl font-medium rounded-lg "
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>

      {value ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 ">
          <div className="bg-white p-7 rounded-lg shadow-lg w-[400px] h-auto ">
                <div className="flex justify-between border-b-2 border-green-400 p-2">
                    <h1 className="font-semibold text-xl">Order Placed</h1>
                    <ImCross onClick={()=>setValue(false)}/>

                </div>
                <h1 className="mt-2 text-[20px] font-medium">Order has been Placed !</h1>
                <p>Thank you for your order! We've received your request and it's now being processed. Once the seller accepts your order, you will receive a confirmation message or phone call</p>

                <div className="flex justify-between mt-5">
                    <button className="bg-gray-200 px-3 py-1 rounded-lg " onClick={()=>setForm(false)}>ok</button>
                    <button className="bg-green-300 px-3 py1 rounded-lg text-gray-600" onClick={()=>setForm(false)}>Cart</button>
                </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Form;

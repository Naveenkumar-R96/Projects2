import React from 'react'
import { ImCross } from "react-icons/im";

const Confirm = ({setValue,setForm}) => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 px-3">
          <div className="bg-white p-7 rounded-lg shadow-lg w-[400px] h-auto">
            <div className="flex justify-between border-b-2 border-green-400 p-2">
              <h1 className="font-semibold text-xl">Order Placed</h1>
              <ImCross onClick={() => setValue(false)} />
            </div>
            <h1 className="mt-2 text-[20px] font-medium">
              Order has been Placed!
            </h1>
            <p>
              Thank you for your order! We've received your request and it's now
              being processed. Once the seller accepts your order, you will
              receive a confirmation message or phone call.
            </p>

            <div className="flex justify-between mt-5">
              <button
                className="bg-gray-200 px-3 py-1 rounded-lg"
                onClick={() => setForm(false)}
              >
                ok
              </button>
              <button
                className="bg-green-300 px-3 py-1 rounded-lg text-gray-600"
                onClick={() => setForm(false)}
              >
                Cart
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Confirm

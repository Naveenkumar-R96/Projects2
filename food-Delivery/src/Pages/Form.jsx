import React, { useContext, useState } from "react";
import { dataContext } from "./Context";
import Confirm from "./Confirm";

const Form = ({ setForm }) => {
  const { setYes, addItem, setAddItem } = useContext(dataContext);

  const [value, setValue] = useState(false);

  const [values, setValues] = useState({
    street: "",
    area: "",
    city: "",
    buildingName: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(submitting(values));
  };

  const submitting = (values) => {
    let errors = {};
    if (!values.buildingName.trim()) {
      errors.buildingName = "Building Name is required";
    }
    if(!values.street.trim()) {
      errors.street = "Street is required";
    }
    if(!values.area.trim()) {
      errors.area = "Area is required";
    }
    if(!values.city.trim()) {
      errors.city = "City is required";
    }
   
    return errors;
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setErrors(submitting(values));
    if (Object.keys(errors).length === 0) {
      setValue(true);
      setAddItem([]);
    }
  };

  return (
    <>
      <div className="bg-gray-200 h-auto min-h-screen  ">
        <div className="flex justify-center items-center h-[80%] p-2 ">
          <form
            action=""
            className="bg-white p-5 w-full rounded-xl shadow-lg"
            onSubmit={handleSubmit}
          >
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
                className="border-2 border-green-300 block w-full py-1 rounded-lg text-center focus:outline-none"
                name="buildingName"
                value={errors.buildingName ? errors.buildingName : values.buildingName}
               
                onChange={handleChange}
              />
              {errors.buildingName && (
                <p className="text-red-500">{errors.buildingName}</p>
              )}
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
                className="border-2 border-green-300 block w-full py-1 rounded-lg text-center focus:outline-none"
                name="street"
                value={values.street}
                onChange={handleChange}
              />
              {errors.street && <p className="text-red-500">{errors.street}</p>}
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
                className="border-2 border-green-300 block w-full py-1 rounded-lg text-center focus:outline-none"
                name="area"
                value={values.area}
                onChange={handleChange}
              />
              {errors.area && <p className="text-red-500">{errors.area}</p>}
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
                className="border-2 border-green-300 block w-full py-1 rounded-lg text-center focus:outline-none mb-2"
                name="city"
                value={values.city}
                onChange={handleChange}
              />
              {errors.city && <p className="text-red-500">{errors.city}</p>}
            </div>
          </form>
        </div>
        <div className="flex justify-between px-5 mt-7 z-10">
          <button
            className="bg-red-400 px-4 py-2 text-white text-xl font-medium rounded-lg"
            onClick={() => setForm(false)}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 px-4 py-2 text-white text-xl font-medium rounded-lg"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>

      {value && Object.keys(errors).length === 0 && (
        <Confirm setValue={setValue} setForm={setForm}/>
      ) }
    </>
  );
};

export default Form;

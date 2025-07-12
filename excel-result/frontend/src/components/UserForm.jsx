import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    regNo: "",
    dob: "",
    email: "",
    telegramId: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateDOB = (dob) => /^\d{2}-\d{2}-\d{4}$/.test(dob);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateDOB(formData.dob)) {
      setError("❌ DOB must be in format DD-MM-YYYY");
      return;
    }

    try {
     
      await axios.post("http://localhost:3001/api/users", formData);
      setMessage("✅ User registered successfully!");
      setError("");
      setFormData({ name: "", regNo: "", dob: "", email: "", telegramId: "" });
    } catch (err) {
      const backendMessage = err.response?.data?.error || "Registration failed";
      setError(`❌ ${backendMessage}`);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6 text-black-700">
          🎓 Student Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "regNo", "dob", "email", "telegramId"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-semibold text-gray-700 mb-1 capitalize">
                {field === "regNo" ? "Register Number" : field === "dob" ? "Date of Birth (DD-MM-YYYY)" : field}
              </label>
              <input
                type="text"
                name={field}
                placeholder={
                  field === "dob"
                    ? "10-08-2005"
                    : field === "telegramId"
                    ? "Optional"
                    : `Enter ${field}`
                }
                value={formData[field]}
                onChange={handleChange}
                required={field !== "telegramId"}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            Submit
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-red-600 font-medium">{error}</p>
        )}
        {message && (
          <p className="mt-4 text-center text-green-600 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default UserForm;

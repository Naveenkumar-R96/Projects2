import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Inputs/Input";
const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center ">
      <h3 className="font-lg font-semibold text-black">WelcomeBack</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your details to login
      </p>
      <form action="" onSubmit={handleLogin}>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          lable="email Address"
          placeholder="naveen@gamil.com"
          type="text"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          lable="Password"
          placeholder="Min 8 Characters"
          type="password"
        />


        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}



        <button className="btn-primary" type="submit">Login</button>

        <p className=" text-[13px] text-slate-800 mt-3"> Dont Have an account ? {""}
          <button className="font-medium text-primary underline cursor-pointer" onClick={()=>{setCurrentPage("signup") }}>SignUp</button>
        </p>
      </form>
    </div>
  );
};

export default Login;

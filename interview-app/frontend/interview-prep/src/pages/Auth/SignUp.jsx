import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import { validateEmail } from "../../util/helper";
const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl="";

    if(!fullName){
      setError("Please enter full Name:")
      return
    }
    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }
    if(!password(password)){
      setError("Please enter a valid password ");
      return;
    }

    setError("")

    try{

    }catch(error){
      if(error.response && error.response.data.message){
        setError(error.response.data.message)
      }
      else{
        setError("someting wen wrong,Please try again")
      }
    }
  };
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center ">
      <h3 className="font-lg font-semibold text-black">Create An Account</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today entering your details below,</p>
      <form action="" onSubmit={handleSignUp}>
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
        <div className="">
          <Input
           value={fullName}
           onChange={({ target }) => setFullName(target.value)}
           lable="Full Name"
           placeholder="naveen"
           type="text"/>
          <Input
           value={email}
           onChange={({ target }) => setEmail(target.value)}
           lable="Email Address"
           placeholder="Email"
           type="email"/>
          <Input
           value={password}
           onChange={({ target }) => setPassword(target.value)}
           lable="Password"
           placeholder="Password"
           type="password"/>
        </div>

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button className="btn-primary" type="submit">Sign Up</button>

        <p className="">
          Already have and account?{" "}
          <button className="font-medium text-primary underline cursor-pointer mt-3" onClick={() => { setCurrentPage("login") }}>Login</button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

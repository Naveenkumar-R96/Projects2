import React from "react";
import Img from "../assets/img.png";
import { APP_FEATURES } from "../util/data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LuSparkles } from "react-icons/lu";
import Login from "../pages/Auth/Login"
import Signup from "../pages/Auth/SignUp";
import Model from "../components/Model";
const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};
  return (
    <>
      <div className="w-full min-h-full bg-[#FFFCEF] ">
        <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0" />
        <div className=" container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/* Header */}
          <header className=" flex justify-between items-center mb-16">
            <div className=" text-xl text-black font-bold">
              Interview Prep Ai
            </div>
            <button
              className=" bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
              onClick={() => setOpenAuthModal(true)}
            >
              Login / Signup
            </button>
          </header>

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-left mb-2">
                <div className="flex items-center gap-2 text-13px text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-100">
                  <LuSparkles /> Ai Powered
                </div>
              </div>
              <h1 className=" text-5xl text-black font-medium mb-6 leading-tight">
                Ace Your Next Interview <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  Ai-Powered
                </span>
                Learning
              </h1>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-gray-900 mr-0 md:mr-20 mb-6">
                Get personalized interview questions and feedback to help you
                prepare for your next interview. and improve your chances of
                success.
              </p>
              <button
                className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition cursor pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mib-h-full relative z-10 ">
        <div>
          <section className="flex items-center justify-center -mt-36">
            <img src={Img} alt="Image" className="w-[80vw] rounded-lg" />
          </section>
        </div>
      </div>

      <div className="w-full min-h-full bg-[#FFFCEF] mt-10">
        <div className="container mx-auto px-4 pt-10 pb-20">
          <section className= "mt-5">
            <h2 className="text-2xl font-medium fext-center mb-12">
              Feathures that make you shine
            </h2>
            <div className=" flex  flex-col items-center gap-8">
              {/* first three cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {APP_FEATURES.slice(0, 3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-[#FFFCEF] p-6 rounded-xl shadow-xl hover:shadow-lg shadow-amber-100 transition border border-amber-100"
                  >
                    <h3 className="text-base font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              {/* last three cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {APP_FEATURES.slice(3).map((feature) => (
                  <div className="bg-[#FFFEF] p-6 rounded-xl shadow-xl hover:shadow-lg  shadow-amber-100 border border-amber-100" key={feature.id}>
                    <h3 className="text-bsae font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="ext-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="text-center">
        Made with ❤️ by Naveenkumar
      </div>

      <Model 
        isOpen={openAuthModal}
        onClose={() => {setOpenAuthModal(false);
          setCurrentPage("login")
        }}
        hideHeader>
        <div>
          {currentPage === "login" && (<Login setCurrentPage={setCurrentPage} />)}
          {currentPage === "signup" && (<Signup setCurrentPage={setCurrentPage} />)}
        </div>
        </Model>

        
    </>
  );
};

export default LandingPage;

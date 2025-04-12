import React, { useState } from "react";
import "./Works.css";
import { motion } from "framer-motion";
import trend from '../../assets/img/trend.png';
import Project3 from '../../assets/img/project3.jpeg';
import { FaGithub } from "react-icons/fa";
import shoe from '../../assets/img/shoe.png';
import { FaLongArrowAltRight } from "react-icons/fa";
import Footer from "../Footer/Footer";
import todo from '../../assets/img/todo.png';
import movie from '../../assets/img/movie.png';
import wheather from '../../assets/img/wheather.png';
import first from '../../assets/img/first.png';
import chat from '../../assets/img/chat.png';
import mve from '../../assets/img/mve.png';
import food from '../../assets/img/food.png';

const Works = () => {
  const [cards, setCards] = useState([
    {
      title:"Food App",
      description:
        "A food app built with React and Tailwind CSS, featuring a search bar and API integration to fetch and display food data.",
      image: food,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #react",
      goto:"https://food-app-five-chi.vercel.app/",
      github:"https://github.com/Naveenkumar-R96/Project"
    },
    {
      title:"Chat Bot",
      description:
        "A chat bot application built with React and Tailwind CSS, featuring a user-friendly interface for chatting with a bot.",
      image: chat,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #react",
      goto:"https://naveen-ai-31.netlify.app/",
      github:"https://github.com/Naveenkumar-R96/Project"
    },
    {
      title:"Movie Client",
      description:
        "A movie client application built with React, featuring a user-friendly interface for searching and displaying movie information.",
      image: mve,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #react",
      goto:"https://naveen-movie-31.vercel.app/",
      github:"https://github.com/Naveenkumar-R96/Project"
    },
    {
      title: "Shoe Store",
      description:
        "A React and Tailwind CSS-powered shoe store offering a modern UI for browsing shoes. Features include filtering options to sort shoes by preferences",
      image: shoe,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #react",
  
  
      goto:"https://naveen-shoecart-31.vercel.app/",
      github:"https://github.com/Naveenkumar-R96/Projects/tree/main/shoe-cart"
     
    },
    {
      title: "Trendings",
      description:
        "A trending dressing site built with React and Tailwind CSS, featuring a cart system and local storage for persistent data.",
      image: trend,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #react",
      github:"https://github.com/Naveenkumar-R96/Projects/tree/main/trendings",
      goto:"https://naveen-trendings-31.vercel.app/",

    },
    {
      title: "Todo Tracker",
      description:
        "A React-based ToDo Tracker featuring CRUD operations and local storage integration for managing and persisting tasks efficiently.",
      image: todo,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #react",
      github:"https://github.com/Naveenkumar-R96/Projects/tree/main/todo-tracker",

      goto:"https://naveen-todo-31.vercel.app/"

    },
    {
      title: "Movie App",
      description:
        "A movie app built with React and Tailwind CSS, featuring a search bar and API integration to fetch and display movie data.",
      image:movie ,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #react",
      github:"https://github.com/Naveenkumar-R96/Main-Flow-Internship/tree/master/movie-app",

      goto:"https://naveen-moviehunt-31.vercel.app/"

    },
    {
      title: "Wheather App",
      description:
        "A weather app built with React and Tailwind CSS, featuring a search bar and API integration to fetch and display weather data.",
      image: wheather,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #javascript #tailwind #react",
      github:"https://github.com/Naveenkumar-R96/Projects/tree/main/wheather-app",
      goto:"https://naveen-wheather-31.vercel.app/"

    },
    {
      title: "Landing Page",
      description:
        "A landing page built with html and CSS, featuring a modern UI design and responsive layout for various devices.",
      image: first,
      isFlipped: false,
      isAnimating: false,
      backing:"#git #html #css",

      goto:"https://naveen-firstsite-31.netlify.app"

    },
    
  ]);

  const handleFlip = (index) => {
    if (!cards[index].isAnimating) {
      const updatedCards = [...cards];
      updatedCards[index].isFlipped = !updatedCards[index].isFlipped;
      updatedCards[index].isAnimating = true;
      setCards(updatedCards);
    }
  };

  const handleAnimationComplete = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].isAnimating = false;
    setCards(updatedCards);
  };

  return (
    <div className=" top-container h-screen bg-black relative "/*  style={{backgroundImage: `url(${Project2})`,backgroundSize: "cover",
      backgroundPosition: "center", backgroundRepeat:'no-repeat',  width: "100%",}} */ >
        <h1 className="text-white text-[200px]  opacity-25 absolute -top-20 right-9 max-sm:text-[100px] max-sm:-top-1">Work</h1>
      <div className="cursor-pointer w-[90%] m-auto ">
        <div className="flex wrape gap-[100px] items-center  h-[80vh] ml-8 max-sm:gap-[30px]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="flip-card  h-[300px] rounded-md   "
              onMouseEnter={() => handleFlip(index)}
              onClick={() => handleFlip(index)}
              initial={{y:'-100vh'}}
              animate={{y:0}}
             transition={{
              duration:1
             }}

            >
              <motion.div
                className="flip-card-inner h-[100%] text-white col-span-3 w-[300px] max-sm:w-[260px]"
                initial={false}
                animate={{ rotateY: card.isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => handleAnimationComplete(index)}
              >
                {/* Front Side */}
                <div
                  className="flip-card-front w-[100%] h-[100%] bg-cover border-1 rounded-lg p-5   bg-white text-black cards flex justify-center items-center flex-col "
                 
                >
                  <h1 className="text-center mb-3 text-3xl max-sm:text-[23px] text-black">{card.title}</h1>
                  <p className="max-sm:text-[20px] text-2xl opacity-60">{card.description}</p>
                </div>

                {/* Back Side */}
                <div
                  className="flip-card-back w-[100%] h-[100%] bg-cover border-1 rounded-lg text-white  flex flex-col justify-center p-5 bg-black back"
              /*     style={{ backgroundImage: `url(${card.image})` }} */
                >
                 <img src={card.image} alt="" className="w-[300px] h-[100px] mb-3 border-t-2"/>
                 <p className="w-[200px] text-2xl max-sm:text-[16px]">{card.backing}</p>
                  <div className="flex justify-between mt-4" >
                    <a href={card.goto}>
                    <button className="bg-white px-6 text-black text-2xl bc-button ">Visit</button>
                    </a>
                    <a href={card.github}>
                    <FaGithub className="text-2xl" />
                    </a>

                  </div>
                </div>
              </motion.div>
            

            </motion.div>
            
          ))}
        </div>
       
      </div>
      <FaLongArrowAltRight  className="text-white absolute text-[200px] left-[150px] top-[400px] opacity-30 scale-x-[1]"/>
      <Footer/>
    </div>
  );
};

export default Works;

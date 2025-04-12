import React from 'react'
import "./Internship.css"
import internship from '../../assets/img/Internship.jpg'
import internship1 from '../../assets/img/mern.png'
import Footer from '../Footer/Footer'
const Internhips = () => {
  return (
    <div className='bg-black min-h-screen h-auto inten'>
        <div className="w-[80%] flex flex-wrap justify-center mx-auto p-4 gap-5">
        </div>
            <div className="techforage flex gap-4 justify-center items-center flex-wrap">
                <img src={internship} alt="" className='w-[400px] h-[300px] max-sm:w-[250px] max-sm:h-auto'/>
                <div className="text text-white">
                    <h1 className='text-5xl max-sm:text-2xl text-center mb-2'>FullStack Intern</h1>
                    <p className='text-xl max-sm:text-[20px] w-[500px] max-sm:w-auto p-2 '>During my full-stack internship at TechForge in Salem, I gained detailed knowledge of front-end development and learned how servers work. On the front end, I worked with HTML, CSS, and JavaScript to create structured, interactive, and responsive web designs. I focused on building user-friendly interfaces and understood the importance of usability and visual appeal. I also explored responsive web design techniques using CSS frameworks like Bootstrap and tools like media queries to ensure websites adapt seamlessly to various devices. Additionally, I acquired a basic understanding of back-end development, including how servers like Node.js handle HTTP requests and responses. Overall, the internship enhanced my technical skills and understanding of full-stack workflows, from web design to server operations.</p>
                </div>
            </div>
            <div className="techforage flex gap-4 justify-center items-center flex-wrap mt-5">
            <img src={internship1} alt="" className='w-[400px] h-[300px] max-sm:w-[250px] max-sm:h-auto'/>
                <div className="text text-white">
                    <h1 className=' max-sm:text-2xl text-5xl text-center'>Mern Intern</h1>
                    <p className='text-xl max-sm:text-[20px] w-[500px] max-sm:w-auto p-2'>During my MERN stack internship at Main Flow Technologies, a government-recognized company, I gained practical experience in full-stack web development using MongoDB, Express.js, React.js, and Node.js. The internship allowed me to develop and enhance my skills through hands-on tasks. I built projects such as a movie app that fetched and displayed the latest movie data using APIs, complete with accurate information and a search feature. I also worked on MongoDB CRUD operations, understanding how to interact with databases to create, read, update, and delete records efficiently. This experience provided me with in-depth knowledge of front-end and back-end integration, API handling, and database management, which are crucial for modern web applications. It was a transformative learning experience that helped me strengthen my technical skills and prepare for real-world projects.</p>
                </div>
               
            </div>
            <Footer/>
     
    </div>
  )
}

export default Internhips

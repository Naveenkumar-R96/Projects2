import React, { useRef, useEffect } from "react";
import "./Credential.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";
import sengunthar from "../../assets/img/sengunthar.jpg";
import cr from "../../assets/img/cr.jpg";
import cr1 from "../../assets/img/cr1.jpg";
import muthaiammal from "../../assets/img/muthai.jpg";
import erode from "../../assets/img/erode.jpg";
import sri from "../../assets/img/sri.jpg";
import Footer from "../Footer/Footer";

const Credential = () => {
  const sectionRefs = useRef([]);

  const data = [
    {
      img: muthaiammal,
      title: "First Place - Web Design Event",
      description:
        "Achieved first place in a competitive web design event, showcasing creativity and technical expertise in front-end development.",
      link: "https://drive.google.com/file/d/19wG0C7PJUbeBVPjfUxh2aasvdO98zd3x/view?usp=drivesdk",
      organizer: "Muthaiammal College",
    },
    {
      img: sengunthar,
      title: "First Place - UI Design",
      description:
        "Achieved first place by demonstrating exceptional skills in UI design, focusing on user experience and modern interface trends.",
      link: "https://drive.google.com/file/d/1nH3yNy1FwEohJt100c6JabOKcPC7IqbM/view?usp=drivesdk",
      organizer: "Sengunthar College",
    },
    {
      img: erode,
      title: "First Place - Web Design Event",
      description:
        "Achieved first place in a competitive web design event, showcasing creativity and technical expertise in front-end development.",
      link: "https://drive.google.com/file/d/1nBgGw0T0HIqwPOml_DNqJaemIeXOWvG3/view?usp=drivesdk",
      organizer: "Erode Sengunthar College, Erode",
    },
    {
      img: sri,
      title: "Participation - Web Development Event",
      description:
        "Participated in a web development event, gaining insights into modern web technologies and enhancing development skills.",
      link: "https://drive.google.com/file/d/1n8bAEE7xSloJHLb5ghBsRl3JyHq8TPB-/view?usp=drivesdk",
      organizer: "Sri Ramakrishna College",
    },
    {
      img: cr,
      title: "First Place - Web War Event",
      description:
        "Secured first place in the Web War competition, demonstrating advanced web development skills and innovative problem-solving abilities.",
      link: "https://drive.google.com/file/d/1nN4D26voeKXGDJ1UbyNm_URxtStRs9Uj/view?usp=drivesdk",
      organizer: "Paavai Engineering College",
    },
    {
      img: cr1,
      title: "Participation - Web Development Event",
      description:
        "Participated in a web development event, gaining insights into modern web technologies and enhancing development skills.",
      link: "https://drive.google.com/file/d/1nRMXOYwj4UwUN0O3KASAFmVHJ6oDBVjq/view?usp=drivesdk",
      organizer: "Sri Ramakrishna College",
    },
  ];

  useEffect(() => {
    // Initialize VanillaTilt on all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          scale: 1,
          speed: 1000,
          max: 20,
          glare: true,
          "max-glare": 0.3,
        });
      }
    });

    // Cleanup
    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref?.vanillaTilt) {
          ref.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <div className="bg-black min-h-screen h-[100%] content">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-wrap gap-8 justify-center">
          {data.map((item, index) => (
            <section
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="max-sm:[300px] w-[400px] h-auto bg-transparent p-5 border-2 border-white text-white hover:bg-white hover:text-black rounded-[50px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-[200px] w-full border-b-2 border-black mb-2"
              />
              <p className="text-2xl">{item.title}</p>
              <span className="text-[15px]">{item.organizer}</span>
              <p className="text-xl">{item.description}</p>
              <p className="text-end cursor-pointer">
                <a href={item.link}>
                  <FaExternalLinkAlt className="mt-4 text-end" />
                </a>
              </p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Credential;

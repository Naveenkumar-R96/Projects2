import { useEffect, useState, useRef } from "react";
import Card from "./Card";
import Navigation from "./Navigation";
import { useMotionValue,useTransform ,motion,useSpring} from "framer-motion";

const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardsInRow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInRow);
  const [page, setPage] = useState(1);
  const [group, setGroup] = useState("Popular");

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [movies, setMovies] = useState([]);

  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const[windowWidth,setWindowWidth]=useState(window.innerWidth)
  const[windowHight,setWindowHight]=useState(window.innerHeight)

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  x.set(mousePosition.left);
  y.set(mousePosition.top);

  const xSpring=useSpring(x,{stiffness: 10,damping: 10})
  const ySpring=useSpring(y,{stiffness: 10,damping: 10})

  const translateX=useTransform(xSpring,[0,windowWidth],[0,-mousePosition.width + windowWidth])
  const translateY=useTransform(ySpring,[0,windowHight],[0,-mousePosition.height + windowHight])

  const cardRef = useRef(null);
  const getMousePosition = (e, referenceElement) => {
    const positions = {
      x: e.clientX,
      y: e.clientY,
    };
    const offset = {
      left: positions.x,
      top: positions.y,
      width: referenceElement.clientWidth,
      height: referenceElement.clientHeight,
    };

    setMousePosition(offset);
    console.log(mousePosition);
  };

  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const getMovies = async () => {
      const url = `${baseUrl}/${group}?Page=${page}&Language=en-US`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "tvshow.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovies(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
      finally{
          setLoading(false)
      }
    };

    getMovies();
  }, [page, group]);
  return (
    <>
      {loading && <p className="text-5xl text-white text-center align-middle">Loading... </p>}
      <div className="relative flex justify-center items-center min-h-screen">
        <Navigation page={page} setPage={setPage} setGroup={setGroup} />
        <motion.div
          className="flex justify-center items-center absolute top-0 left-0 overflow-hidden max-sm:fixed"
          style={{ width: wrapperWidth, translateX, translateY }}
          ref={cardRef}
          onMouseMove={(e) => getMousePosition(e, cardRef.current)}
        >
          <div className="flex flex-wrap justify-center">
            {movies.map((movie, i) => (
              <div key={i}>
                <Card cardWidth={cardWidth} movie={movie} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;

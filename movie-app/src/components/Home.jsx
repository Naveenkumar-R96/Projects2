import { useEffect, useState } from "react";
import Card from "./Card";
import Navigation from "./Navigation";
const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardsInRow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInRow);
  const [page,setPage] = useState(1)
  const [group,setGroup]=useState('Popular')

  const apiKey=import.meta.env.VITE_API_KEY
  const baseUrl=import.meta.env.VITE_BASE_URL

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const url =
        `${baseUrl}/${group}?Page=${page}&Language=en-US`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":apiKey,
          "x-rapidapi-host": "tvshow.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovies(result);
        console.log(result)
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, [page,group]);
  return (
    <>
    <Navigation page={page} setPage={setPage} setGroup={setGroup}/>
    <div
      className="flex justify-center items-center "
      style={{ width: wrapperWidth }}
    >
      <div className="flex flex-wrap">
        {movies.map((movie, i) => {
          return (
            <div key={i}>
              <Card cardWidth={cardWidth} movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
    </>
    
  );
};

export default Home;

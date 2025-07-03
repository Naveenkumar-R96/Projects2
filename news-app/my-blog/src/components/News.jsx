import React, { use, useState } from "react";
import Weather from "./Weather";
import Calender from "./Calender";
import UserImg from "../assets/user.png"; // Assuming you have a user image in assets
import "./News.css"; // Assuming you have a CSS file for styling
import axios from "axios"; // If you need to fetch data from an API
import { useEffect } from "react";
import NewsModel from "./NewsModel"; // Assuming you have a NewsModel component
const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "health",
  "science",
  "sports",
  "nation",
];

const News = () => {
  const [news, setNews] = useState(null);
  const [headline, setHeadline] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModel,setShowModel] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const apikey = import.meta.env.VITE_NEWS_API;

  const handleSearch=(e)=>{
    e.preventDefault();
    setSearchQuery(searchInput);
    setSearchInput("");
  }

  const handleArticle=(article) => {
    setSelectedArticle(article);
    setShowModel(true);
  }

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=${apikey}`;

      if (searchQuery) {
        url=` https://gnews.io/api/v4/search?q=${searchQuery}&apikey=da5ee64f23c8dff3f7a1418c2cd40d7f`
      }

    

      try {
        const response = await axios.get(url);
        const fetchedNews = response.data.articles;

        fetchedNews.map((article) => {
          if (!article.image) {
            article.image = { UserImg }; // Placeholder image if no image is available
          }
        });
        setHeadline(fetchedNews[0]); // Assuming you want the first article as the headline
        setNews(fetchedNews.slice(1, 7)); //
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [selectedCategory,searchQuery]);

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-box">
          <form action="" onSubmit={handleSearch}>
            <input type="text" placeholder="Search News.." value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
            <button type="submit">
              <i className="fa-solid-fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">
            <img src={UserImg} alt="" />
            <p>Naveens</p>
          </div>
          <nav className="categories">
            <h1 className="nav-heading">Categories</h1>
            <div className="nav-links">
              {categories.map((category, index) => (
                <a href="#" className="nav-link" key={index} onClick={(e) => handleCategoryClick(e, category)}>
                  {category}
                </a>
              ))}
             
              <a href="#" className="nav-link">
                Bookmarks <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          {headline && (
            <div className="headline" onClick={() => handleArticle(headline)}>
              <img src={headline.image} alt="headline title" />
              <h2 className="headline-title">
                {headline.title}
                <i className="fa-regular fa-bookmark bookmar"></i>
              </h2>
            </div>
          )}

          <div className="news-grid">
            {news &&
              news.map((article, index) => (
                <div className="news-grid-item" key={index} onClick={() => handleArticle(article)}>
                  <img src={article.image} alt={article.title} />
                  <h3>
                    {article.title}
                    <i className="fa-regular fa-bookmark bookmar"></i>
                  </h3>
                </div>
              ))}
          </div>
        </div>
        <NewsModel show={showModel} article={selectedArticle} onClose={()=>setShowModel(false)}/>
        <div className="my-blogs">My-blogs</div>
        <div className="weather-calendar">
          <Weather />
          <Calender />
        </div>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default News;

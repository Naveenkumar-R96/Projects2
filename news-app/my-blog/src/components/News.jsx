import React from "react";
import Weather from "./Weather";
import Calender from "./Calender";
import UserImg from "../assets/user.png"; // Assuming you have a user image in assets
import "./News.css"; // Assuming you have a CSS file for styling
const News = () => {
return (
    <div className="news">
        <header className="news-header">
            <h1 className="logo">News & Blogs</h1>
            <div className="search-box">
                    <form action="">
                            <input type="text" placeholder="Search News.." />
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
                            <a href="#" className="nav-link">Technology</a>
                            <a href="#" className="nav-link">World</a>
                            <a href="#" className="nav-link">Health</a>
                            <a href="#" className="nav-link">Sports</a>
                            <a href="#" className="nav-link">Entertainment</a>
                            <a href="#" className="nav-link">Business</a>
                            <a href="#" className="nav-link">Science</a>
                            <a href="#" className="nav-link">Lifestyle</a>
                            <a href="#" className="nav-link">
                                Bookmarks <i className="fa-regular fa-bookmark"></i>
                            </a>

                    </div>
                </nav>
            </div>
            <div className="news-section">
                <div className="headline">Headline</div>
                <div className="news-grid">NewsGrid</div>
            </div>
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

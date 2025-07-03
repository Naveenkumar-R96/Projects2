import React from "react";
import img from "../assets/user.png";
import "./newsmodel.css"; // Assuming you have a CSS file for styling
const NewsModel = ({ show, article, onClose }) => {
    if(!show) return null; // If show is false, don't render the model
    console.log(article);
  return (
    <div className="model-overlay">
      <div className="model-content">
        <span className="close-button" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <img src={article.image} alt="" className="model-img" />
        <h2 className="model-title">
          {" "}
         {article.title || "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </h2>
        <p className="model-source">{article.content}</p>
        <p className="model-date">{article.publishedAt}</p>
        <p className="model-description">
          {article.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque."}
        </p>
        <a href={article.url} className="read-more-link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsModel;

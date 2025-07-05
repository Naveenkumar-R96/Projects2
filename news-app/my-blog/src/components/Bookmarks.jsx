import React from "react";
import "./newsmodel.css";
import "./model.css";
import UserImg from "../assets/user.png"; // Assuming you have a user image in assets
       
        const Bookmarks = ({Bookmark,setBookmark,setShowBookmarks}) => {
return (
    <div className="model-overlay">
        <div className="model-content">
            <span
                className="close-button"
                onClick={() => setShowBookmarks(false)}
            >
                <i className="fa-solid fa-xmark"></i>
            </span>
            {Bookmark.length > 0 ? (
                <>
                    <h2 className="bookmarks-heading">Bookmarked News</h2>
                    <div className="bookmarks-list">
                        {Bookmark.map((item, index) => (
                            <div className="bookmark-item" key={index}>
                                <img src={item.image || UserImg} alt="Bookmark img" />
                                <h3>{item.title || "No Title Available"}</h3>
                                <span
                                    className="delete-button"
                                    onClick={() =>
                                        setBookmark((prev) =>
                                            prev.filter((_, i) => i !== index)
                                        )
                                    }
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </span>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <h2 className="bookmarks-heading">No Bookmarks Found</h2>
            )}
        </div>
    </div>
);
};

export default Bookmarks;

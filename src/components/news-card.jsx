import "./news.css";
import React from "react";

const newsCard = (props) => {
  return (
    <div className="news">
      <img src={props.img} alt="" />
      <div className="news-body">
        <div className="news-up">
          <img src={props.icon} alt="" />
          <h2>{props.heading}</h2>
        </div>
        <div className="news-down">
          <p>{props.details}</p>
        </div>
      </div>
    </div>
  );
};
export default newsCard;

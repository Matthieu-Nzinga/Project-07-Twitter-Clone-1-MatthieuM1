import React from "react";
import { follows } from "../models/Database";
import { Link } from "react-router-dom";

function CardTwo() {
  return (
    <div className="card-one">
      <p>Who to follow</p>
      {follows.map((element) => (
        <div className="card-two" key={element.id}>
          <div className="card-body">
            <Link to={`/${element.userName}`}>
              <img className="card-two-img" src={element.avatar} alt="" />
            </Link>
            <div className="card-text">
              <h2>
                <Link to={`/${element.userName}`} className="link-dom">
                  <p>{element.userName} </p>
                </Link>
                <img src={element.iconCertification} alt="" />
              </h2>
              <span>{element.lienProfil} </span>
            </div>
          </div>
          <button className="bg-white text-black px-3 py-1">Follow</button>
        </div>
      ))}
      <p className="show-more">Show more</p>
    </div>
  );
}

export default CardTwo;

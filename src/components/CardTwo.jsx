import React from "react";
import { follows } from "../models/Database";

function CardTwo() {
  return (
    <div className="card-one">
      <p>Who to follow</p>
      {follows.map((element) => (
        <div className="card-two" key={element.id}>
          <div className="card-body">
            <img className="card-two-img" src={element.avatar} alt="" />
            <div className="card-text">
              <h2>
                <p>{element.userName} </p>
                <img src={element.iconCertification} alt="" />
              </h2>
              <span>{element.lienProfil} </span>
            </div>
          </div>
          <button className="follow">Follow</button>
        </div>
      ))}
      <p className="show-more">Show more</p>
    </div>
  );
}

export default CardTwo;

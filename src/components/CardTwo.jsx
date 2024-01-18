import React from "react";
import { follows } from "../models/Database";
import { Link } from "react-router-dom";
import { iconCertifier } from "../assets/Icon";
import { useTweetContext } from "../models/TweetContext";


function CardTwo() {
  const { userProfils } = useTweetContext();


  return (
    <div className="card-one">
      <p>Who to follow</p>
      {follows.map((element) =>{
  const user = userProfils?.find((use) => use.userId === element.userId);

        return(
          <div className="card-two" key={element.id}>
          <div className="card-body">
            <Link to={`/${user?.userName}`}>
              <img className="card-two-img" src={user?.avatar} alt="" />
            </Link>
            <div className="card-text">
              <h2 className="mb-[-10px] ">
                <Link to={`/${user?.userName}`} className="link-dom">
                  <p>{user?.userName} </p>
                </Link>
                <img src={iconCertifier} alt="" />
              </h2>
              <Link to={`/${user?.userName}`}>
              <span>{user?.lienProfil} </span>
              </Link>
            </div>
          </div>
          <button className="bg-white text-black px-3 py-1">Follow</button>
        </div>
        )
      } )}
      <p className="show-more">Show more</p>
    </div>
  );
}

export default CardTwo;

import React from "react";
import "../style/userName.css";
import { Link, useParams } from "react-router-dom";
import { userProfil } from "../models/User";
import { GrLinkPrevious } from "react-icons/gr";
import { RxLink2 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { RiUserFollowFill } from "react-icons/ri";
import TweetDetail from "../components/TweetDetail";
import { tweets } from "../models/Database";

function Username() {
  const { userName } = useParams();
  
  console.log(userName);

  const oneUser = userProfil.find((user) => {
    return user.userName == userName;
  });


  const Twitters = tweets.filter((tweeter) => {
    return tweeter.userId === oneUser.userId;
  });

  return (
    <div className="timeline">
      <div className="username-entete">
        <Link to={"/"} className="link-white">
          <GrLinkPrevious />
        </Link>
        <div>
          <h2>
            {oneUser.userName} <img src={oneUser.iconCertification} alt="" />
          </h2>
          <span className="username-span">{Twitters.length} posts</span>
        </div>
      </div>
      <div className="user-content">
        <img className="banner" src={oneUser.banner} alt="" />
        <div className="user-avatar">
          <img className="user-avatar" src={oneUser.avatar} alt="" />
          <div className="user-profil">
            <p>{oneUser.points} </p>
            <button className="follow">Follow</button>
          </div>
        </div>
      </div>
      <div className="user-text">
        <h2>
          {oneUser.userName} <img src={oneUser.iconCertification} alt="" />
        </h2>
        <span className="username-span">{oneUser.lienProfil} </span>
      </div>
      <p className="user-description">{oneUser.description} </p>
      <div className="user-link-content">
        <div>
          <RxLink2 />
          <span className="username-link">{oneUser.linkWeb} </span>
        </div>
        <div>
          <SlCalender />
          <span className="username-span">{oneUser.dateCreated} </span>
        </div>
      </div>
      <div className="user-abonne">
        <p>
          {oneUser.abonnemets} <span className="username-span">abonnemets</span>
        </p>
        <p>
          {oneUser.abonne} <span className="username-span">abonnés</span>
        </p>
      </div>
      <div className="user-suivi">
        <RiUserFollowFill />
        <span className="username-span">{oneUser.suiviPar} </span>
      </div>
      <ul className="user-ul">
        <li>Posts</li>
        <li>Affiliés</li>
        <li>Réponses</li>
        <li>Médias</li>
        <li>J'aime</li>
      </ul>
      <div>
        <TweetDetail tweet={Twitters} />
      </div>
    </div>
  );
}

export default Username;

import React from "react";
import { CiSettings } from "react-icons/ci";
import { squid } from "../models/Database";

function CardOne() {
  return (
    <div className="bg-gray-800 w-full flex gap-5 flex-col font-xl p-2.5 rounded-xl">
      <div className="flex items-center justify-between">
        <p className="font-bold">Trends for you</p>
        <CiSettings />
      </div>

      {squid.map((element) => (
        <div className="font-bold" key={element.id}>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">{element.description}</span>
            <span className="text-gray-500">{element.point}</span>
          </div>
          <p>{element.pseudo}</p>
          <span className="text-gray-500">{element.count}</span>
        </div>
      ))}

      <p className="text-blue-500 font-bold">Show more</p>
    </div>
  );
}

export default CardOne;

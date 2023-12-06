import React from "react";

const InfoCard = ({ card }) => {
  const { icon, bgClass, name, description } = card;
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl py-0 ${bgClass} `}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;

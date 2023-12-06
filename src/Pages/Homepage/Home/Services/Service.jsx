import React from "react";

const Service = ({ service }) => {
  const { img, name, description } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-center justify-center">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;

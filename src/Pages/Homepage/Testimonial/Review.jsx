import React from "react";

const Review = ({ data }) => {
  const { review, img, location, name } = data;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-sm">{review}</p>
        <div className="flex  items-center justify-between">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src={img} />
            </div>
          </div>
          <div className="mt-4">
            <h2>{name}</h2>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

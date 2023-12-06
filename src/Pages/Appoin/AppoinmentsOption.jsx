import React, { useState } from "react";
import BookingModal from "./BookingModal/BookingModal";

const AppoinmentsOption = ({ apponment, setTreatment }) => {
  const { name, slots } = apponment;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-2 mb-2">
      <div className="card-body">
        <h2 className="text-center text-xl font-bold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-center">
          <button
            className="btn"
            onClick={() => {
              setTreatment(apponment);
              document.getElementById("booking-modal").showModal();
            }}
          >
            open modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentsOption;

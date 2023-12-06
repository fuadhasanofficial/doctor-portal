import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div className="hero min-h-screen bg-base-200 lg:px-8">
        <div className="hero-content flex-col lg:flex-row-reverse lg:px-8">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;

import React, { useEffect, useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppoinment from "./AvailableAppoinment";
import BookingModal from "./BookingModal/BookingModal";

const AppoinContainer = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <AppoinmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppoinmentBanner>
      <AvailableAppoinment selectedDate={selectedDate}></AvailableAppoinment>
    </>
  );
};

export default AppoinContainer;

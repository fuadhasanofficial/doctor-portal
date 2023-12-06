import React from "react";
import InfoCard from "./InfoCard";
import phone from "../../../assets/icons/phone.svg";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";

const cardData = [
  {
    id: 1,
    name: "Opening Hours",
    description: "Open 9.00 am to 5.00pm everyday",
    icon: clock,
    bgClass: "bg-gradient-to-r from-primary to-secondary",
  },
  {
    id: 2,
    name: "Our Locations",
    description: "Open 9.00 am to 5.00pm everyday",
    icon: marker,
    bgClass: "bg-slate-400",
  },
  {
    id: 3,
    name: "Contact Us",
    description: "Open 9.00 am to 5.00pm everyday",
    icon: phone,
    bgClass: "bg-gradient-to-r from-primary to-secondary",
  },
];
const InfoCards = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-3 mt-14">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;

import { format } from "date-fns";

import React, { useEffect, useState } from "react";
import AppoinmentsOption from "./AppoinmentsOption";
import BookingModal from "./BookingModal/BookingModal";
import { useQuery } from "react-query";

const AvailableAppoinment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  // const [apponments, setApponments] = useState([]);
  const { data: apponments = [], isLoading } = useQuery({
    queryKey: "apponments",
    queryFn: () =>
      fetch("http://localhost:5000/services").then((res) => res.json()),
  });

  return (
    <div className="text-secondary">
      <h2>Available Services on {format(selectedDate, "PP")}</h2>
      <div className="grid  lg:grid-cols-3">
        {apponments.map((apponment, idx) => (
          <AppoinmentsOption
            key={idx}
            apponment={apponment}
            setTreatment={setTreatment}
          ></AppoinmentsOption>
        ))}
        {treatment ? (
          <BookingModal
            treatment={treatment}
            selectedDate={selectedDate}
            setTreatment={setTreatment}
          ></BookingModal>
        ) : (
          <span className="loading loading-dots loading-lg"></span>
        )}
      </div>
    </div>
  );
};

export default AvailableAppoinment;

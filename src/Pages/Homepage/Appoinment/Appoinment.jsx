import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";

const Appoinment = () => {
  return (
    <section>
      <div
        className="hero   bg-base-200  mt-24"
        style={{
          background: `url('${appointment}')`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row py-0 hidden lg:block">
          <img
            src={doctor}
            className="max-w-lg -mt-[95px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-xl text-primary font-bold">Appointment</h1>
            <h2 className="text-2xl text-white">Make an appointment Today</h2>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;

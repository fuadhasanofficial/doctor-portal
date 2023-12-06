import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact mt-[128px] lg:p-6">
      <div>
        <h2 className="text-center text-secondary  font-bold">Contact Us</h2>
        <h2 className="text-center   text-white text-2xl">
          Stay connected with us
        </h2>
      </div>
      <div className="flex flex-col justify-center w-full">
        <input
          type="text "
          className="h-[48px] lg:w-[450px] mx-auto w-[359px] rounded-sm"
        />{" "}
        <br />
        <input
          type="text"
          className="h-[48px] lg:w-[450px] mx-auto w-[359px] rounded-sm"
        />{" "}
        <br />
        <textarea
          className="lg:w-[450px] mx-auto w-[359px] rounded-sm"
          name=""
          id=""
          cols="30"
          rows="6"
        ></textarea>
      </div>
    </section>
  );
};

export default Contact;

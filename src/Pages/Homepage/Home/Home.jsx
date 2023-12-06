import React from "react";
import Banner from "../Banner /Banner";
import InfoCards from "./InfoCards";
import Services from "./Services/Services";
import Section from "../Section/Section";
import Appoinment from "../Appoinment/Appoinment";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../../Contact/Contact";

const Home = () => {
  return (
    <div className="text-start mx-[21]">
      this is home
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Section></Section>
      <Appoinment></Appoinment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;

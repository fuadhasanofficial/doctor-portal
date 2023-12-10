import React, { useContext } from "react";
import Banner from "../Banner /Banner";
import InfoCards from "./InfoCards";
import Services from "./Services/Services";
import Section from "../Section/Section";
import Appoinment from "../Appoinment/Appoinment";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../../Contact/Contact";
import dotenv from "dotenv";
import { AuthContext } from "../../../Context/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(import.meta.env.VITE_apiKey);
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

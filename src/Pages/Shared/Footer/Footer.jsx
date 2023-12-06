import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="foot">
      <footer className="footer foot p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">SERVICES</header>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </nav>
        <nav>
          <header className="footer-title">ORAL HEALTH</header>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teath Whitening</Link>
        </nav>
        <nav>
          <header className="footer-title">OUR ADDRESS</header>
          <Link className="link link-hover">New York - 101010 Hudson</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

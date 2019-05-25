import React from "react";
import { Link } from "react-router-dom";

const AboutPage = props => {
  return (
    <div className="page-about">
      About Page
      <Link to="/">Home</Link>
      <Link to="/works">Works</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default AboutPage;

import React from "react";
import { Link } from "react-router-dom";

const HomePage = props => {
  return (
    <div className="page-home">
      Home Page
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default HomePage;

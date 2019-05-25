import React from "react";
import { Link } from "react-router-dom";

const WorksPage = props => {
  return (
    <div className="page-works">
      Works Page
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default WorksPage;

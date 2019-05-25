import React from "react";
import { Link } from "react-router-dom";

const ContactPage = props => {
  return (
    <div className="page-contact">
      Contact Page
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
    </div>
  );
};

export default ContactPage;

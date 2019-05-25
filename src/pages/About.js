import React from "react";
import { NavBtn } from "../components/NavBtns";

const AboutPage = props => {
  return (
    <div className="page-about">
      <p>About Page</p>
      <NavBtn destination="" text="Home" />
      <NavBtn destination="about" text="About" active />
      <NavBtn destination="works" text="Works" />
      <NavBtn destination="contact" text="Contact" />
    </div>
  );
};

export default AboutPage;

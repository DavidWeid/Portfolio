import React from "react";
import { NavBtn } from "../components/Btns";

const AboutPage = props => {
  return (
    <div className="page-about">
      <NavBtn className="nav-home" destination="" text="Home" />
      <NavBtn className="nav-works" destination="works" text="Works" />
      <NavBtn className="nav-contact" destination="contact" text="Contact" />
    </div>
  );
};

export default AboutPage;

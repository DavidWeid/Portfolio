import React from "react";
import { NavBtn } from "../components/Btns";
import "./home.scss";

const HomePage = props => {
  return (
    <div className="page-home">
      <NavBtn className="nav-about" destination="about" text="About" />
      <NavBtn className="nav-works" destination="works" text="Works" />
      <NavBtn className="nav-contact" destination="contact" text="Contact" />
    </div>
  );
};

export default HomePage;

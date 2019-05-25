import React from "react";
import { NavBtn } from "../components/NavBtns";

const HomePage = props => {
  return (
    <div className="page-home">
      <p>Home Page</p>
      <NavBtn destination="" text="Home" active />
      <NavBtn destination="about" text="About" />
      <NavBtn destination="works" text="Works" />
      <NavBtn destination="contact" text="Contact" />
    </div>
  );
};

export default HomePage;

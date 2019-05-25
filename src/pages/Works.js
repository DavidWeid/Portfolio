import React from "react";
import { NavBtn } from "../components/NavBtns";

const WorksPage = props => {
  return (
    <div className="page-works">
      <p>Works Page</p>
      <NavBtn destination="" text="Home" />
      <NavBtn destination="about" text="About" />
      <NavBtn destination="works" text="Works" active />
      <NavBtn destination="contact" text="Contact" />
    </div>
  );
};

export default WorksPage;

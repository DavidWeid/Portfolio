import React from "react";
import { NavBtn } from "../components/Btns";

const WorksPage = props => {
  return (
    <div className="page-works">
      <NavBtn className="nav-works" destination="" text="Home" />
      <NavBtn className="nav-contact" destination="contact" text="Contact" />
    </div>
  );
};

export default WorksPage;

import React from "react";
import { NavBtn } from "../components/Btns";
import "./works.scss";

const WorksPage = props => {
  return (
    <div className="page-works">
      <NavBtn className="nav-works" destination="" text="Home" />
      <NavBtn className="nav-contact" destination="contact" text="Contact" />
      <div className="content-works">
        {/* <div className="content-workstitle">Portfolio</div> */}
        <div className="content-worksbody">
            <div className="project-card project-featured">Item 1</div>
            <div className="project-card">Item 2</div>
            <div className="project-card">Item 3</div>
            <div className="project-card">Item 4</div>
            <div className="project-card">Item 5</div>
            <div className="project-card">Item 6</div>
            <div className="project-card">Item 7</div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;

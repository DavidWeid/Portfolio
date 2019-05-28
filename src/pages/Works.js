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
          <div className="project-card project-featured">
            <img className="project-img" src="./images/mongo-scrapper-saved.png" alt="" />
            <div className="project-text" />
          </div>
          <div className="project-card">
            <img className="project-img" src="./images/" alt="" />
            <div className="project-text" />
          </div>
          <div className="project-card">
            <img className="project-img" src="./images/" alt="" />
            <div className="project-text" />
          </div>
          <div className="project-card">
            <img className="project-img" src="./images/" alt="" />
            <div className="project-text" />
          </div>
          <div className="project-card">
            <img className="project-img" src="./images/" alt="" />
            <div className="project-text" />
          </div>
          <div className="project-card">
            <img className="project-img" src="./images/" alt="" />
            <div className="project-text" />
          </div>
          <div className="project-card">
            <img className="project-img" src="./images/" alt="" />
            <div className="project-text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;

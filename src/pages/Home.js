import React from "react";
import { NavBtn } from "../components/Btns";
import "./home.scss";

const HomePage = props => {
  return (
    <div className="page-home">
      <NavBtn className="nav-about" destination="about" text="About" />
      <NavBtn className="nav-works" destination="works" text="Works" />
      <NavBtn className="nav-contact" destination="contact" text="Contact" />
      <div className="content-home">
        <div className="content-title">Welcome</div>
        <div className="content-body">
          <p>
            My name is <span id="name">David J. Weid II</span>
          </p>
          <p>
            I am a certified Full Stack <span>Web Developer</span> with <br />a
            genuine <span>passion</span> to never stop learning and coding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

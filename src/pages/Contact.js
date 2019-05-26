import React from "react";
import { NavBtn } from "../components/Btns";

const ContactPage = props => {
  return (
    <div className="page-contact">
      <NavBtn className="nav-contact" destination="" text="Home" />
      <NavBtn className="nav-works" destination="works" text="Works" />
    </div>
  );
};

export default ContactPage;

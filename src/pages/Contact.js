import React from "react";
import { NavBtn } from "../components/NavBtns";

const ContactPage = props => {
  return (
    <div className="page-contact">
      <p> Contact Page</p>
      <NavBtn destination="" text="Home" />
      <NavBtn destination="about" text="About" />
      <NavBtn destination="works" text="Works" />
      <NavBtn destination="contact" text="Contact" active />
    </div>
  );
};

export default ContactPage;

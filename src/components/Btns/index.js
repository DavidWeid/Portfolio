import React from "react";
import { Link } from "react-router-dom";
import "./navBtns.scss";

export function NavBtn(props) {
  return (
    // props.className = "nav-home", "nav-about", "nav-works", or "nav-contact"
    // props.active will disable the button
    <div
      type="button"
      className={`${props.className} nav-container`}
      align="center"
    >
      <Link
        className={props.active ? "btn-link btn-disabled" : "btn-link"}
        to={`/${props.destination}`}
        onClick={props.active ? e => e.preventDefault() : null}
      >
        {props.text}
      </Link>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./navBtns.scss";

export function NavBtn(props) {
  return (
    <div type="button" className="btn-container" align="center">
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

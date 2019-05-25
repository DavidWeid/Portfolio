import React from "react";
import { Link } from "react-router-dom";
import "./navBtns.scss";

export function NavBtn(props) {
  return (
    <button type="button">
      <Link
        to={`/${props.destination}`}
        onClick={props.active ? e => e.preventDefault() : null}
      >
        {props.text}
      </Link>
    </button>
  );
}

import React from "react";
import "../App.css";
function Nwabutton(props) {
  return (
    <div>
      <button
        onClick={props.click}
        className="btn"
        style={{ backgroundColor: props.bg, color: props.color }}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Nwabutton;

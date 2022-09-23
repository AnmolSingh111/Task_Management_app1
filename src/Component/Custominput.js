import React from "react";

function Custominput(props) {
  return (
    <div className="inputWrapper">
      <label> {props.name}</label>

      <input
        value={props.value}
        className="inputform"
        placeholder={props.placeholder}
        onChange={props.Badlav}
      />
    </div>
  );
}

export default Custominput;

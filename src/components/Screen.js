import React from "react";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <input className="screen" type='text' value={value} />
  );
};

export default Screen;

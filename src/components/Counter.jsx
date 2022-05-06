import React from "react";

const Counter = (props) => {
  return (
    <>
      <h1>{props.currentCount}</h1>
      <button onClick={props.onClick}>{props.ctaText}</button>
    </>
  );
};

export default Counter;

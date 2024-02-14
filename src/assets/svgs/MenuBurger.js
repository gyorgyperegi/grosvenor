import React from "react";

export const MenuBurger = props => (
  <svg
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    style={{
      height: props.height,
      marginTop: "auto",
      marginBottom: "auto",
      width: "17px"
    }}
  >
    <polyline
      fill="none"
      stroke="#b99581"
      strokeLinecap="round"
      strokeWidth="8%"
      points={["5,1 5,9"]}
    />
    <polyline
      fill="none"
      stroke="#b99581"
      strokeLinecap="round"
      strokeWidth="8%"
      points={["1,5 9,5"]}
    />
  </svg>
);

export default MenuBurger;

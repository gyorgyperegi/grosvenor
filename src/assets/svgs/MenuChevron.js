import React from "react";
import styled from "styled-components";

const SVGWrapper = styled.svg`
  transition: transform 0.2s ease-in-out;
  transform: ${props => (props.isOpen ? "rotate(90deg)" : "rotate(270deg)")};
`;
const PWrapper = styled.polyline`
  transition: fill 0.3s;
`;

export const MenuChevron = props => (
  <SVGWrapper
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    style={{
      height: props.height,
      marginTop: "auto",
      marginBottom: "auto"
    }}
    isOpen={props.isOpen}
  >
    <PWrapper
      fill="none"
      stroke={"#DE9B72"}
      strokeLinecap="round"
      strokeWidth="10%"
      points={["2.5,1 6.5,5 2.5,9"]}
    />
  </SVGWrapper>
);

export default MenuChevron;

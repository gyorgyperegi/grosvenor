import styled from "styled-components";
import MenuBurger from "../../assets/svgs/MenuBurger";
import {useRef} from "react";

const Container = styled.div`
  height: 102px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 60px;
`;
const Border = styled.div`
  height: 22px;
  display: flex;
  padding: 8px;
  border: 2px solid #b99581;
  border-radius: 6px;
  cursor: pointer;
`;

const SkinnyBar = ({handleClick}) => {

  const skinnyRef = useRef();

  return (
    <Container onClick={() => handleClick(skinnyRef)} className={"skinnyBar"}>
      <Border ref={skinnyRef}>
        <MenuBurger/>
      </Border>
    </Container>
  );
}

export default SkinnyBar;
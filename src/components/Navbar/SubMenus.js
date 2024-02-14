import styled from "styled-components";

const SubMenuWrapper = styled.div`
  position: absolute;
  top: 102px;
  left: ${props => (props.position ? props.position + "px" : 0)};
  padding: 15px;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 4px 2px 1px #DE9B72;
  border: 1px solid black;
  background: #043343;
  z-index: 1;
`;
const SubMenuItem = styled.div`
  width: 100px;
  height: 30px;
  cursor: pointer;
`;

const SubMenus = ({ items, position, handleNavigate }) => {

  return (
    <SubMenuWrapper className={"subMenus"} position={position}>
      {items.map((item,index) => {
        return(
          <>
            <SubMenuItem onClick={() => handleNavigate(item.path)}>
              {item.label}
            </SubMenuItem>
          </>
        )
      })}
    </SubMenuWrapper>
  );
}

export default SubMenus;
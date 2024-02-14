import styled from "styled-components";
import Brand from "./Brand";
import {MenuItems} from "./MenuItems";
import MenuChevron from "../../assets/svgs/MenuChevron";
import {createRef, useCallback, useEffect, useRef, useState} from "react";
import SubMenus from "./SubMenus";
import {useNavigate} from "react-router-dom";
import SkinnyBar from "./SkinnyBar";
import {SkinnyMenuItems} from "./SkinnyMenuItems";

const ComponentWrapper = styled.div`
  margin-bottom: 40px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  background: #043343;
  border-bottom: 2px solid black;
  box-shadow: 0 0 14px 0 #DE9B72;
`;
const MenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
`;
const MenuItemWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  width: 135px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border-left: 1px solid black;
  box-shadow: ${props => props.highlight ? "0 0 14px 0 #DE9B72" : ""};
`;
const MenuItem = styled.li`
  display: flex;
  list-style: none;
  margin-right: 10px;
`;

const Navbar = ({isMenuOpen, windowSizeChange}) => {

  const [reStructuredList, setReStructuredList] = useState(MenuItems);
  const [skinnyItemsList, setSkinnyItemsList] = useState(SkinnyMenuItems);
  const refs = useRef([]);
  const shareRefs = useRef([]);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [skinnySubPosition, setSkinnySubPosition] = useState(SkinnyMenuItems);
  const compareItemLengths = refs.current.length !== reStructuredList.length;
  const compareSharedItemLengths = shareRefs.current.length !== reStructuredList.length;
  const navigate = useNavigate();

  const handleNavigate = (path,skinnySub) => {
    if(skinnySub) {
      setIsSubMenuOpen(false)
    } else {
      updateMenuItems(-1)
    }
    navigate(path);
  }

  useEffect(()=> {
    reStructuredList.forEach((items, index) => {
      delete items.position;
      refs.current[index] = createRef();
      shareRefs.current[index] = createRef();
    });

    setReStructuredList([...MenuItems])
  },[compareItemLengths,compareSharedItemLengths])

  useEffect(()=> {
    updateMenuItems(-1)
  },[windowSizeChange])

  const updateMenuItems = index => {
    const label = refs.current[index];
    if (label) {
      const labelPosition = label?.current?.getBoundingClientRect()?.left + 2;

      reStructuredList.forEach(el => delete el.position);
      reStructuredList.forEach(el => el.open = false);
      const item = reStructuredList[index];
      item.position = labelPosition;
      item.open = true
    } else {
      reStructuredList.forEach(el => delete el.position);
      reStructuredList.forEach(el => el.open = false);
    }
    setReStructuredList([...reStructuredList]);
  };

  const openSkinnySubMenus = (skinnyRef) => {
    setIsSubMenuOpen(!isSubMenuOpen)
    setSkinnySubPosition(skinnyRef?.current?.getBoundingClientRect().left - 50)
  };

  return (
    <ComponentWrapper className={"navbar"}>
      <Container>
        <Brand isMenuOpen={isMenuOpen}/>
        {isMenuOpen ? (
          <MenuContainer>
            {reStructuredList.map((item,index) => {
              return(
                <>
                  <MenuItemWrapper ref={refs.current[index]} onClick={() => updateMenuItems(index)} highlight={item.position}>
                    <MenuItem>{item.label}</MenuItem>
                    {item.children && <MenuChevron isOpen={item.open} height={"20px"}/>}
                  </MenuItemWrapper>
                  {item.open && item.children && (
                    <SubMenus ref={shareRefs.current[index]} items={item.children} position={item.position} handleNavigate={(path) => handleNavigate(path)}/>
                  )}
                </>
              )
            })}
          </MenuContainer>)
          : (
            <>
              <SkinnyBar handleClick={(skinnyRef) => openSkinnySubMenus(skinnyRef)}/>
              {isSubMenuOpen && (<SubMenus items={skinnyItemsList} position={skinnySubPosition} handleNavigate={(path) => handleNavigate(path,true)}/>)}
            </>
          )
        }
      </Container>
    </ComponentWrapper>
  );
}

export default Navbar;
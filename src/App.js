import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
import IntroPage from "./components/IntroPage";
import {useEffect, useState} from "react";
import SkinnyBar from "./components/Navbar/SkinnyBar";

const ContentWrapper = styled.div`
  width: calc(100vh - 100px);
  margin: auto;
`;
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const PictureFrame = styled.div`
  background: #3A3D3E;
  box-shadow: 0 0 14px 0 #00000040;
`;
const OuterBorder = styled.div`
  border: 2px solid #DE9B72;
  height: 99%;
  width: 98%;
  padding: 6px;
  margin: 0 auto`
;
const MidBorder = styled.div`
  border: 6px solid #DE9B72;
  height: 100%;
  width: 96%;
  padding: 6px;
  margin: auto;`
;
const InnerBorder = styled.div`
  position: relative;
  border: 2px solid #DE9B72;
  height: 100%;
  width: 100%;
  margin: auto;`
;
const CornerDecoration = styled.img`
	position: absolute;
  width: 3em;
  margin: -3px;

  @media (min-width: 768px) {
    width: 3.5em;
    margin: -4px;
  }
  
  @media (min-width: 992px) {
    width: 4em;
    margin: -5px;
  }
  
  @media (min-width: 1200px) {
    width: 5em;
    margin: -6px;
  }
`;
const CornerLeftTop = styled(CornerDecoration)`
  left: 0;
  top: 0;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
`;
const CornerRightTop = styled(CornerDecoration)`
  top: 0;
  right: 0;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;
const CornerRightBottom = styled(CornerDecoration)`
  right: 0;
  bottom: 0;
  -webkit-transform: scale(-1);
  transform: scale(-1);
`;
const CornerLeftBottom = styled(CornerDecoration)`
  left: 0;
  bottom: 0;
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
`;
const Container = styled.div`
`;

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [windowSizeChange, setWindowSizeChange] = useState(0);

  const handleResize = () => {
    setIsMenuOpen(window.innerWidth >= 650);
    setWindowSizeChange(window.innerWidth)
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    console.log('hi')
  }, []);

  return (
      <AppWrapper>
        <BrowserRouter>
        <Navbar isMenuOpen={isMenuOpen} windowSizeChange={windowSizeChange}/>
        <ContentWrapper>
          <PictureFrame>
            <OuterBorder>
              <MidBorder>
                <InnerBorder>
                  <CornerLeftTop src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"/>
                  <CornerRightTop src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"/>
                  <CornerRightBottom src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"/>
                  <CornerLeftBottom src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"/>
                  <Container>
                    <Routes>
                      <Route path="/" exact element={<HomePage />} />
                      <Route path="/contact_us" element={<ContactPage />} />
                      <Route path="/intro" element={<IntroPage />} />
                    </Routes>
                  </Container>
                </InnerBorder>
              </MidBorder>
            </OuterBorder>
          </PictureFrame>
        </ContentWrapper>
        </BrowserRouter>
      </AppWrapper>
  );
}

export default App;

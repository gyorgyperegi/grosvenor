import styled from "styled-components";
import logo from "../../assets/images/winelogo.png"

const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 330px;
  background: #043343;
  padding: 10px;
  margin-left: 50px;
  border-bottom: 2px solid black;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 0 14px 0 #DE9B72;

  @media (max-width: 905px) {
    width: 80px;
    justify-content: center;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 905px) {
      display: none;
  }
`;
const FirstLine = styled.p`
  margin-top: 20px;
  margin-bottom: 23px;
  font-size: 30px;
  letter-spacing: -2px;
`;
const SecondLine = styled.p`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 2px;
`;

const Brand = ({isMenuOpen}) => {
  return (
    <div className={"brand"}>
      <BrandContainer shortbox={!isMenuOpen}>
        <img alt="saloon_logo" src={logo} width="55" height="105"/>
        {isMenuOpen &&
          <TextWrapper>
            <FirstLine>THE LITTLE SALOON</FirstLine>
            <SecondLine>COMMUNITY PUB COMPANY</SecondLine>
          </TextWrapper>
        }
      </BrandContainer>
    </div>
  );
}

export default Brand;
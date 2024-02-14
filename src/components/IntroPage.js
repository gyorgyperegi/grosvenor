import styled from "styled-components";

const Container = styled.div`
  width: ${props => props.ismenuopen ? "calc(100vh - 150px)" : "100%"};
  height: 100%;
`;
const ContentWrapper = styled.div`
  height: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 30px;
`;
const RowWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
`;
const Tag = styled.p`
  font-size: ${props => props.ismenuopen ? "20px" : "16px"};
  font-weight: 600;
  margin-right: 20px;

    @media (max-width: 478px) {
        font-size: 14px;
    }
`;
const Field = styled.p`
  font-size: ${props => props.ismenuopen ? "20px" : "16px"};
  font-weight: 400;

    @media (max-width: 478px) {
        font-size: 14px;
    }
`;
const IntroPage = ({ismenuopen}) => {
  return (
    <Container ismenuopen={ismenuopen} className={"introPage"}>
      <h1 style={{display: "flex", justifyContent: "center", marginBottom: "30px"}}>Intro Page</h1>
      <ContentWrapper>
        <RowWrapper>
          <Tag ismenuopen={ismenuopen}>Vision:</Tag>
          <Field ismenuopen={ismenuopen}>-We aim to provide our guests with the best experience possible. This includes offering excellent service, delicious food and drinks, and exciting entertainment throughout their journey with us!</Field>
        </RowWrapper>
        <RowWrapper>
          <Tag ismenuopen={ismenuopen}>Value:</Tag>
          <Field ismenuopen={ismenuopen}>-A recently established company, founded in 2023, led by seasoned professionals with extensive backgrounds in the hospitality industry. We are enthusiastic about going the extra mile for our guests, aspiring to be the ultimate hosts who create an atmosphere that resonates with them, making them feel as if they have found their second home.</Field>
        </RowWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default IntroPage;
import styled from "styled-components";

const Container = styled.div`
  width: calc(100vh - 150px);
  height: 100%;
`;
const ContentWrapper = styled.div`
  height: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
`;
const RowWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
`;
const Tag = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Field = styled.p`
  font-size: 20px;
  font-weight: 400;
`;
const IntroPage = () => {
  return (
    <Container className={"introPage"}>
      <h1 style={{display: "flex", justifyContent: "center", marginBottom: "30px"}}>Intro Page</h1>
      <ContentWrapper>
        <RowWrapper>
          <Tag>Vision:</Tag>
          <Field>-We aim to provide our guests with the best experience possible. This includes offering excellent service, delicious food and drinks, and exciting entertainment throughout their journey with us!</Field>
        </RowWrapper>
        <RowWrapper>
          <Tag>Value:</Tag>
          <Field>-A recently established company, founded in 2023, led by seasoned professionals with extensive backgrounds in the hospitality industry. We are enthusiastic about going the extra mile for our guests, aspiring to be the ultimate hosts who create an atmosphere that resonates with them, making them feel as if they have found their second home.</Field>
        </RowWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default IntroPage;
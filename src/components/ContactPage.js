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
  margin-right: 40px;
`;
const Field = styled.p`
  font-size: 20px;
  font-weight: 400;
`;
const Contact = () => {
  return (
    <Container className={"contact"}>
      <h1 style={{display: "flex", justifyContent: "center"}}>Contact Page</h1>
      <ContentWrapper>
        <RowWrapper>
          <Tag>Saloon Manager:</Tag>
          <Field>Adam Varga</Field>
        </RowWrapper>
        <RowWrapper>
          <Tag>Email:</Tag>
          <Field>adam.varga@thelittlesaloon.com</Field>
        </RowWrapper>
        <RowWrapper>
          <Tag>Post. Address:</Tag>
          <Field>SE28 8HT, 5 Curlew Close</Field>
        </RowWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default Contact;
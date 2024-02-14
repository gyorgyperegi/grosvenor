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
  padding-left: 50px;
`;
const RowWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;

    @media (max-width: 478px) {
        flex-direction: column;
    }
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
const Contact = ({ismenuopen}) => {
  return (
    <Container ismenuopen={ismenuopen} className={"contact"}>
      <h1 style={{display: "flex", justifyContent: "center"}}>Contact Page</h1>
      <ContentWrapper>
        <RowWrapper ismenuopen={ismenuopen}>
          <Tag ismenuopen={ismenuopen}>Saloon Manager:</Tag>
          <Field ismenuopen={ismenuopen}>Adam Varga</Field>
        </RowWrapper>
        <RowWrapper ismenuopen={ismenuopen}>
          <Tag ismenuopen={ismenuopen}>Email:</Tag>
          <Field ismenuopen={ismenuopen}>adam.varga@thelittlesaloon.com</Field>
        </RowWrapper>
        <RowWrapper ismenuopen={ismenuopen}>
          <Tag ismenuopen={ismenuopen}>Post. Address:</Tag>
          <Field ismenuopen={ismenuopen}>SE28 8HT, 5 Curlew Close</Field>
        </RowWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default Contact;
import styled from "styled-components";

export default function Home() {
  return (
    <StyledContainer>
      <h1>My recipes App</h1>
      <p>Find the best recipes for every occasion.</p>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-top: 50px;
  margin-left: 30px;
`;

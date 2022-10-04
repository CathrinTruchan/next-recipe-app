import Image from "next/image";
import styled from "styled-components";

export default function Veggie() {
  return (
    <StyledContainer>
      <StyledText>
        <h2>Veggie recipes</h2>
        <p>Cool and easy recipes for all vegeterians.</p>
      </StyledText>
      <Image
        alt="Hmmmm Pizza"
        src="/Pizza.jpg"
        width="4256"
        height="2832"
        layout="responsive"
      ></Image>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-top: 50px;
  margin-left: 30px;
`;

const StyledText = styled.div`
  margin: 20px 0 20px 0;
`;

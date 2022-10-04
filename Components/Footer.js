import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterText>Made with ♥</FooterText>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: black;
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const FooterText = styled.p`
  color: lightcoral;
  margin: 20px;
`;

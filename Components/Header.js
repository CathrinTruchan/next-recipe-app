import styled from "styled-components";
import { GiCook } from "react-icons/gi";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo />
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid lightcoral;
  margin-bottom: 100px;
`;

const StyledLogo = styled(GiCook)`
  font-size: 4rem;
  margin-left: 20px;
  color: lightcoral;
`;

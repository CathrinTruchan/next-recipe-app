import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.main`
  background-color: lightgrey;
  height: 100vh;
  padding: 40px 0;
`;

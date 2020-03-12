import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
`;

const Container = styled.div`
  margin: 3em;
`;

export default function IndexPage() {
  return (
    <Container>
      <GlobalStyle />
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector />
    </Container>
  );
}

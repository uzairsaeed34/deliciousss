import styled from "styled-components";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <LogoContainer>
            <GiKnifeFork />
            <Logo to={"/"}>Deliciousss</Logo>
          </LogoContainer>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  margin-left: 0.5rem; /* Adds some space between the icon and the text */
`;

const Nav = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-start; /* Aligns the logo to the left */
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;

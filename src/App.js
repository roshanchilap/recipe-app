import Category from "./components/Category.js";
import Pages from "./components/Pages";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";
import FormStyle from "./components/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>deliciousss</Logo>
        </Nav>
        <FormStyle />
        <Category />
        <Pages />
      </div>
    </Router>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Lobster", cursive;
  color: black;
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 1.2rem;
  }
`;

export default App;

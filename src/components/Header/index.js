import React from "react";
import BasicLink from "gatsby-link";
import styled from "styled-components";

const Element = styled.div`
  background-color: #3d348b;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Link = styled(BasicLink)`
  color: white;
  text-decoration: none;
`;

const Header = () => (
  <Element>
    <Container>
      <h1 style={{ margin: 0 }}>
        <Link to="/">Gatsby Central</Link>
      </h1>
    </Container>
  </Element>
);

export default Header;

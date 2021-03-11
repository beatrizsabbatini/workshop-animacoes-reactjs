import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <nav>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h3>Home</h3>
        </Link>

        <Link to="/tecnologias" style={{ textDecoration: 'none' }}>
          <h3>Technologies</h3>
        </Link>

        <Link to="/portfolio" style={{ textDecoration: 'none' }}>
          <h3>Portfolio</h3>
        </Link>
      </nav>
    </Container>
  );
};

export default Header;

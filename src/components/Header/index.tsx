import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Container, NavItem } from './styles';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <nav>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <NavItem isSelected={location.pathname === '/'}>Home</NavItem>
        </Link>

        <Link to="/tecnologias" style={{ textDecoration: 'none' }}>
          <NavItem isSelected={location.pathname === '/tecnologias'}>
            Technologies
          </NavItem>
        </Link>

        <Link to="/portfolio" style={{ textDecoration: 'none' }}>
          <NavItem isSelected={location.pathname === '/portfolio'}>
            Portfolio
          </NavItem>
        </Link>
      </nav>
    </Container>
  );
};

export default Header;

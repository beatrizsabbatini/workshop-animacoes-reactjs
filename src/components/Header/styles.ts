import styled, { css } from 'styled-components';

interface NavItemProps {
  isSelected: boolean;
}

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const NavItem = styled.h3<NavItemProps>`
  margin: 0 2rem;
  padding: 10px 0;
  width: 100%;
  height: 3.5rem;
  text-align: center;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.background};
      color: ${theme.colors.secondary};
    `}
`;

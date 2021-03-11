import styled from 'styled-components';

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
    padding: 10px 0;

    h3 {
      margin: 0 2rem;
    }
  }
`;

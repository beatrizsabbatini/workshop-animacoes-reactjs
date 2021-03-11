import React from 'react';

import { Container, Content } from './styles';

export interface MainContainerProps {
  justifyContent?: string;
}

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  justifyContent,
}) => {
  return (
    <Container>
      <Content justifyContent={justifyContent}>{children}</Content>
    </Container>
  );
};

export default MainContainer;

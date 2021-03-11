import styled from 'styled-components';
import { MainContainerProps } from '.';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
`;

export const Content = styled.div<MainContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-around'};
  height: 100vh;
  width: 50vw;
  max-width: 900px;
  padding-top: 3vh;
`;

import styled, { css } from 'styled-components';

export const PictureAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
`;

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10vh;
  overflow: hidden;
`;

export const PortfolioItem = styled.div<{ background: string }>`
  width: 30%;
  height: 180px;
  margin: 5px;

  ${({ background }) => css`
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    border: 1px solid #cdcdcd;
  `}
`;

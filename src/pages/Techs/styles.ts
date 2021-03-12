import styled from 'styled-components';

export const ParallaxContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h1 {
    position: absolute;
    -webkit-animation: appear 2s;
    animation: appear 2s;

    &:nth-child(1) {
      top: 20%;
      left: 70%;
      transform: scale(0.5);
      opacity: 0.4;
    }

    &:nth-child(2) {
      top: 70%;
      left: 40%;
      transform: scale(0.6);
      opacity: 0.3;
    }

    &:nth-child(3) {
      top: 55%;
      left: 0%;
      transform: scale(0.8);
      opacity: 0.6;
    }

    &:nth-child(4) {
      top: 35%;
      left: 35%;
      transform: scale(0.9);
      opacity: 0.9;
    }

    &:nth-child(5) {
      top: 0%;
      left: 45%;
      transform: scale(0.5);
      opacity: 0.7;
    }

    &:nth-child(6) {
      top: 60%;
      left: 60%;
      transform: scale(0.7);
      opacity: 0.8;
    }

    &:nth-child(7) {
      top: 15%;
      left: 8%;
      transform: scale(0.9);
      opacity: 0.8;
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: scale(0.001);
    }
  }
`;

export const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-top: 5vh;
`;

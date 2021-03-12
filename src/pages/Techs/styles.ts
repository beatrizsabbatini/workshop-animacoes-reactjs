import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ParallaxContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;

  h1 {
    position: absolute;
    -webkit-animation: appear 2s;
    transition: appear 2s;

    &:nth-child(1) {
      top: 20%;
      left: 70%;
      opacity: 0.2;
    }

    &:nth-child(2) {
      top: 63%;
      left: 40%;
      opacity: 0.3;
    }

    &:nth-child(3) {
      top: 55%;
      left: 0%;
      opacity: 0.8;
    }

    &:nth-child(4) {
      top: 25%;
      left: 35%;
      opacity: 1;
    }

    &:nth-child(5) {
      top: 43%;
      left: 40%;
      opacity: 0.7;
    }

    &:nth-child(6) {
      top: 60%;
      left: 65%;
      opacity: 0.8;
    }

    &:nth-child(7) {
      top: 40%;
      left: 8%;
      opacity: 0.4;
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
  position: absolute;
  z-index: 2;
  top: 0;
  left: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-top: 5vh;
`;

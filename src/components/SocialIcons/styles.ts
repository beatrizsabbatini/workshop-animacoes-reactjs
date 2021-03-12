import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IconsContainer = styled(motion.div)`
  margin: 3rem 0;
  cursor: pointer;

  & svg:nth-child(n) {
    margin: 0 1rem;
  }
`;

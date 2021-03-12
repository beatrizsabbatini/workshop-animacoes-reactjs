import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const NameAndRole = styled(motion.div)`
  display: flex;
  flex-direction: column;

  p {
    font-size: 2rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

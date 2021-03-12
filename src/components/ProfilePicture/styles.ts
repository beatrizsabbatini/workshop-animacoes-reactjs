import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Props } from '.';

export const Picture = styled(motion.img)<Props>`
  border-radius: 50%;
  min-height: 100px;
  min-width: 100px;
  padding: ${({ size }) => (size === 'small' ? '5px' : '8px')};
  border: ${({ theme }) => `2px solid ${theme.colors.primary}`};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          height: 8vw;
          width: 8vw;
          padding: 5px;
        `;

      case 'medium':
        return css`
          height: 10vw;
          width: 10vw;
          padding: 6px;
        `;

      case 'big':
        return css`
          height: 15vw;
          width: 15vw;
          padding: 10px;
        `;

      default:
        break;
    }

    return css``;
  }}
`;

import React, { useEffect, useState } from 'react';

import { IconsContainer } from './styles';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import { ReactComponent as Github } from '../../assets/github.svg';

export interface Props {
  size?: 'small' | 'medium' | 'big';
  color?: string;
}

const SocialIcons: React.FC<Props> = ({ size, color }) => {
  const [iconSize, setIconSize] = useState('25px');

  useEffect(() => {
    switch (size) {
      case 'small':
        setIconSize('25px');
        break;

      case 'medium':
        setIconSize('30px');
        break;

      case 'big':
        setIconSize('35px');
        break;

      default:
        setIconSize('25px');
        break;
    }
  }, [size]);

  return (
    <IconsContainer layoutId="social-icons" transition={{ duration: 1 }}>
      <Instagram
        width={iconSize}
        height={iconSize}
        fill={color}
        onClick={() => window.open('https://www.instagram.com/bia.schwartz')}
      />
      <Linkedin
        width={iconSize}
        height={iconSize}
        fill={color}
        onClick={() =>
          window.open(
            'https://www.linkedin.com/in/beatriz-schwartz-sabbatini-barbosa-491619178/',
          )
        }
      />
      <Github
        width={iconSize}
        height={iconSize}
        fill={color}
        onClick={() => window.open('https://github.com/beatrizsabbatini')}
      />
    </IconsContainer>
  );
};

export default SocialIcons;

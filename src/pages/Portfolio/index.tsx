import React from 'react';

import MainContainer from '../../components/MainContainer';
import ProfilePicture from '../../components/ProfilePicture';
import SocialIcons from '../../components/SocialIcons';
import { jobs } from '../../constants/mock';
import { PictureAndIcons, PortfolioContainer, PortfolioItem } from './styles';

const Portfolio: React.FC = () => {
  const parallaxItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const container = {
    hidden: {
      opacity: 0.5,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <MainContainer justifyContent="flex-start">
      <PictureAndIcons>
        <ProfilePicture size="medium" />
        <SocialIcons color="#79C5AE" size="medium" />
      </PictureAndIcons>

      <PortfolioContainer
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {jobs.map(item => (
          <PortfolioItem
            key={item.id}
            background={item.image}
            variants={parallaxItem}
          />
        ))}
      </PortfolioContainer>
    </MainContainer>
  );
};

export default Portfolio;

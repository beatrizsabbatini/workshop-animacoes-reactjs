import React from 'react';

import MainContainer from '../../components/MainContainer';
import ProfilePicture from '../../components/ProfilePicture';
import SocialIcons from '../../components/SocialIcons';
import { jobs } from '../../constants/mock';
import { PictureAndIcons, PortfolioContainer, PortfolioItem } from './styles';

const Portfolio: React.FC = () => {
  return (
    <MainContainer justifyContent="flex-start">
      <PictureAndIcons>
        <ProfilePicture size="medium" />
        <SocialIcons color="#79C5AE" size="medium" />
      </PictureAndIcons>

      <PortfolioContainer>
        {jobs.map(item => (
          <PortfolioItem key={item.id} background={item.image} />
        ))}
      </PortfolioContainer>
    </MainContainer>
  );
};

export default Portfolio;

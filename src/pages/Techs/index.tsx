import React from 'react';

import MainContainer from '../../components/MainContainer';
import ParallaxWord from '../../components/ParallaxWord';
import ProfilePicture from '../../components/ProfilePicture';
import SocialIcons from '../../components/SocialIcons';
import { techs } from '../../constants/mock';
import { ParallaxContainer, PictureContainer } from './styles';

const Techs: React.FC = () => {
  return (
    <>
      <MainContainer>
        <PictureContainer>
          <ProfilePicture size="small" />
          <SocialIcons size="small" color="#79C5AE" />
        </PictureContainer>
        <ParallaxContainer>
          {techs.map(item => (
            <ParallaxWord item={item}>{item.name}</ParallaxWord>
          ))}
        </ParallaxContainer>
      </MainContainer>
      <div style={{ height: '20vh' }} />
    </>
  );
};

export default Techs;

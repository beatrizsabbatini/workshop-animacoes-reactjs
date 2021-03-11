import React from 'react';
import MainContainer from '../../components/MainContainer';
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
            <h1>{item.name}</h1>
          ))}
        </ParallaxContainer>
      </MainContainer>
    </>
  );
};

export default Techs;

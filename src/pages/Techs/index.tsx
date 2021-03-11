import React from 'react';
import MainContainer from '../../components/MainContainer';
import ProfilePicture from '../../components/ProfilePicture';
import SocialIcons from '../../components/SocialIcons';
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
          <h1>HTML</h1>
          <h1>CSS</h1>
          <h1>JavaScript</h1>
          <h1>ReactJS</h1>
          <h1>React Native</h1>
          <h1>GraphQl</h1>
          <h1>NodeJS</h1>
        </ParallaxContainer>
      </MainContainer>
      <div style={{ height: '20vh' }} />
    </>
  );
};

export default Techs;

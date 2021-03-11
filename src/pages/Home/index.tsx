import React from 'react';

import { TopContainer, NameAndRole, RowContainer } from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import MainContainer from '../../components/MainContainer';
import SocialIcons from '../../components/SocialIcons';

const Home: React.FC = () => {
  return (
    <MainContainer>
      <TopContainer>
        <RowContainer>
          <ProfilePicture size="big" />
          <NameAndRole>
            <h1>Beatriz Schwartz</h1>
            <p>Software Engineer</p>
          </NameAndRole>
        </RowContainer>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </TopContainer>

      <SocialIcons size="big" color="#c1c1c1" />
    </MainContainer>
  );
};

export default Home;

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
          Oi! Meu nome é Bia e sou uma graduanda de Engenharia de Software.
          Atualmente me encontro no meu último ano da faculdade (se Deus quiser
          😂) e ao mesmo tempo, trabalho em tempo integral. Gosto muito de
          front-end porém a meta desse ano é me tornar fullstack! Neste workshop
          estarei passando um pouquinho sobre o meu conhecimento de animações
          para o desenvolvimento de aplicações web e mobile :)
        </p>
      </TopContainer>

      <SocialIcons size="big" color="#c1c1c1" />
    </MainContainer>
  );
};

export default Home;

import React from 'react';

import { motion } from 'framer-motion';
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
          <NameAndRole
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h1>Beatriz Schwartz</h1>
            <p>Software Engineer</p>
          </NameAndRole>
        </RowContainer>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Oi! Meu nome é Bia e sou uma graduanda de Engenharia de Software.
          Atualmente me encontro no meu último ano da faculdade (se Deus quiser
          😂) e ao mesmo tempo, trabalho em tempo integral. Gosto muito de
          front-end porém a meta desse ano é me tornar fullstack! Neste workshop
          estarei passando um pouquinho sobre o meu conhecimento de animações
          para o desenvolvimento de aplicações web e mobile :)
        </motion.p>
      </TopContainer>

      <SocialIcons size="big" color="#c1c1c1" />
    </MainContainer>
  );
};

export default Home;

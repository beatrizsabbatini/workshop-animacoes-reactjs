import React from 'react';
import MainContainer from '../../components/MainContainer';
import ProfilePicture from '../../components/ProfilePicture';
import SocialIcons from '../../components/SocialIcons';
import { PictureAndIcons, PortfolioContainer, PortfolioItem } from './styles';

const jobs = [
  {
    id: 0,
    title: 'Job 1',
    image:
      'https://image.freepik.com/vetores-gratis/criando-um-conceito-de-aplicativo-local-de-texto-de-pessoas-e-conteudo-design-de-ui-ux-modelo-de-pagina-de-destino-do-site_138260-411.jpg',
  },
  {
    id: 1,
    title: 'Job 2',
    image: 'https://i.ytimg.com/vi/25zB8JIr71Y/maxresdefault.jpg',
  },
  {
    id: 2,
    title: 'Job 3',
    image:
      'https://file.mockplus.com/image/2019/11/e2c96dfa-05b1-4d84-b56c-5fc6d756a33e.jpg',
  },
  {
    id: 3,
    title: 'Job 4',
    image: 'https://miro.medium.com/max/1600/0*GWvV5kcuVATUfs2r.png',
  },
  {
    id: 4,
    title: 'Job 5',
    image: 'https://i.ytimg.com/vi/7KLvP3r2eGU/maxresdefault.jpg',
  },
  {
    id: 5,
    title: 'Job 6',
    image: 'https://gillde.com/wp-content/uploads/2019/07/UI-Design-24-1.png',
  },
  {
    id: 6,
    title: 'Job 7',
    image: 'https://miro.medium.com/max/3200/0*TEwA0APjmk1JFgtC.png',
  },
];

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

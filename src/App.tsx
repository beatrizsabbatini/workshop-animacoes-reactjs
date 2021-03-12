import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

const App: React.FC = () => {
  const defaultTheme: DefaultTheme = theme;

  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <AnimateSharedLayout>
          <Header />
          <Routes />
          <GlobalStyle />
        </AnimateSharedLayout>
      </ThemeProvider>
    </Router>
  );
};

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Techs from '../pages/Techs';
import Portfolio from '../pages/Portfolio';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tecnologias" component={Techs} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  );
};

export default Routes;

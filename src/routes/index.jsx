import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AboutMe } from '../pages/AboutMe';
import { MyProjects } from '../pages/MyProjects';

function Routes() {
  return (
    <Switch>
      <Route path="/projetos" render={(props) => <MyProjects {...props} />} />
      <Route path="/quem-sou" render={(props) => <AboutMe {...props} />} />
      <Route exact path="/" render={(props) => <Home {...props} />} />
    </Switch>
  );
}

export default Routes;

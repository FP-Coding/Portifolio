import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

function Routes() {
  return (
    <Switch>
      <Route exact to="/" render={(props) => <Home {...props} />} />
    </Switch>
  );
}

export default Routes;

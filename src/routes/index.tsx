import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
  </Switch>
);

export default Routes;

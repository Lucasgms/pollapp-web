import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={SignUp} />
    </Switch>
  </Router>
);

export default Routes;

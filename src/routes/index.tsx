import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import NewPoll from '../pages/NewPoll';
import PollDetails from '../pages/PollDetails';
import Answer from '../pages/Answer';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} isPrivate />
    <Route path="/polls/:hash" exact component={Answer} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/signin" exact component={SignIn} />
    <Route path="/new-poll" exact component={NewPoll} isPrivate />
    <Route path="/my-polls/:id" exact component={PollDetails} isPrivate />
  </Switch>
);

export default Routes;

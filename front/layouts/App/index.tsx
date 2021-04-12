import React from 'react';
import loadabel from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

const Home = loadabel(() => import('@layouts/Home'));
const Login = loadabel(() => import('@pages/Login'));

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default App;

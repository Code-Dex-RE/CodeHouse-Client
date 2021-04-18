import React from 'react';
import loadabel from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

const Home = loadabel(() => import('@layouts/Home'));
const Login = loadabel(() => import('@pages/Login'));
const SignUp = loadabel(() => import('@pages/SignUp'));
const Join = loadabel(() => import('@pages/Join'));

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/join" component={Join} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;

import React from 'react';
import loadabel from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

const Home = loadabel(() => import('@layouts/Home'));
const Login = loadabel(() => import('@pages/Login'));
const Join = loadabel(() => import('@pages/Join'));
const Create = loadabel(() => import('@components/CreateRoom')); //지우기

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/join" component={Join} />
    <Route path="/create" component={Create} /> {/* 지우기 */}
  </Switch>
);

export default App;

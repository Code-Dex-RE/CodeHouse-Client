import React from 'react';
import loadabel from '@loadable/component';
import { Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const Home = loadabel(() => import('@layouts/Home'));
const Login = loadabel(() => import('@pages/Login'));
const SignUp = loadabel(() => import('@pages/SignUp'));
const Join = loadabel(() => import('@pages/Join'));
const Profile = loadabel(() => import('@pages/Profile'));
const queryClient = new QueryClient();

const App = () => (
  <Switch>
    <QueryClientProvider client={queryClient}>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/listroom" component={Join} />
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Switch>
);

export default App;

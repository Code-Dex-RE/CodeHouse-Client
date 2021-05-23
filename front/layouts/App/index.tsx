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
const Room = loadabel(() => import('@pages/Room'));
const queryClient = new QueryClient();

const App = () => (
  <Switch>
    <QueryClientProvider client={queryClient}>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/listroom" component={Join} />
      <Route path="/profile" component={Profile} />
      <Route path="/room/:roomID" component={Room} />
      <Route exact path="/" component={Home} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Switch>
);

export default App;

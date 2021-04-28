import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { LoginWrap, Logo, ContactWrap, Title, Descript, KakaoBtn, GithubBtn } from './styles';
import { useQuery } from 'react-query';

import axios from 'axios';

const Login = ({ history }: RouteComponentProps) => {
  // const { data: userData, error } = useQuery('tokenUser', async () => {
  //   axios.get('api/auth');
  // });

  const onClickGithub = useCallback(() => {
    axios.get('/api/auth/github/callback', {});
  }, []);

  const onClickKAKAO = useCallback(() => {}, []);

  // if (!userData) {
  //   <Redirect to="/signup" />;
  // }
  return (
    <LoginWrap>
      <Link to="/">
        <Logo>CodeHouse</Logo>
      </Link>
      <ContactWrap>
        <Title>Welcome to CodeHouse!</Title>
        <Descript>Login to Enjoy CodeHouse</Descript>
      </ContactWrap>
      <KakaoBtn onClick={onClickKAKAO} />

      <a href="/api/auth/github">
        <GithubBtn />
      </a>
    </LoginWrap>
  );
};

export default Login;

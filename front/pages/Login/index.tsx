import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { LoginWrap, Logo, ContactWrap, Title, Descript, KakaoBtn, GithubBtn } from './styles';
import { useQuery } from 'react-query';
import { useCookies, Cookies } from 'react-cookie';

import axios from 'axios';

const Login = ({ history }: RouteComponentProps) => {
  const [cookies, setCookie] = useCookies(['jwt']);

  if (cookies.jwt !== undefined) {
    return <Redirect to="/" />;
  }
  return (
    <LoginWrap>
      <Link to="/">
        <Logo>CodeHouse</Logo>
      </Link>
      <ContactWrap>
        <Title>Welcome to CodeHouse!</Title>
        <Descript>Login to Enjoy CodeHouse</Descript>
      </ContactWrap>
      <KakaoBtn />

      <a href="/api/auth/github">
        <GithubBtn />
      </a>
    </LoginWrap>
  );
};

export default Login;

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { LoginWrap, Logo, ContactWrap, Title, Descript, KakaoBtn, GithubBtn } from './styles';
import { useMediaQuery } from 'react-responsive';
import useUser from '@hooks/userHook';
import useSWR from 'swr';
import axios from 'axios';
import fetcher from '@utils/fetcher';

const Login = ({ history }: RouteComponentProps) => {
  //   const { data: oauthData, revalidate } = useSWR('/api/oauth/', fetcher);
  //   const [isLogin, setLogin] = useState(false);
  const { isLogIn, login } = useUser();
  const [isSignUp, setSignUp] = useState(false);
  //   const [userData, setUserData] = useState([]);
  //   const value = useMemo(() => ({ setLogin, setUserData }), [setLogin, setUserData]);

  const onClickOauth = useCallback(
    (id) => () => {
      if (parseInt(id) === 2) {
        axios.post(`/api/oauth/login/${id}`).then((res) => {
          if (res.status === 200) {
            console.log(login({ name: res.data[0].name, email: res.data[0].email }));

            history.push('/signup');
          }
        });
      }

      if (parseInt(id) === 1) {
        axios.post(`/api/oauth/login/${id}`).then((res) => {
          if (res.status === 200) {
            console.log(login({ name: res.data[0].name, email: res.data[0].email }));
            //   setUserData(login({ name: res.data[0].name, email: res.data[0].email }))
            console.log('1', isLogIn);
            //   revalidate();
          }
        });
      }
    },
    [],
  );
  //   console.log('1st login', login);
  //   console.log(userData);

  if (isLogIn && !isSignUp) {
    // console.log('login',login);
    console.log('2', isLogIn);
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
      <KakaoBtn onClick={onClickOauth(1)}>
        Login With KaKao
      </KakaoBtn>
      {/* <Link to="/signup">
        <GithubBtn />
      </Link> */}
      <GithubBtn onClick={onClickOauth(2)}>
        Sign in with Github
      </GithubBtn>
      </ContactWrap>
    </LoginWrap>
  );
};

export default Login;

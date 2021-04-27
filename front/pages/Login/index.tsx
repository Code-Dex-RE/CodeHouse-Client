import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { LoginWrap, Logo, ContactWrap, Title, Descript, KakaoBtn, GithubBtn } from './styles';
import useUser from '@hooks/userHook';
import axios from 'axios';

const Login = ({ history }: RouteComponentProps) => {
  const client_id = '68be602421b09236d651';
  const redirect_URL = 'http://localhost:8000/signup';

  const { isLogIn, login } = useUser();
  const [isSignUp, setSignUp] = useState(false);

  // const onClickOauth = useCallback(
  //   (id) => () => {
  //     if (parseInt(id) === 2) {
  //       axios.post(`/api/oauth/login/${id}`).then((res) => {
  //         if (res.status === 200) {
  //           console.log(login({ name: res.data[0].name, email: res.data[0].email }));

  //           history.push('/signup');
  //         }
  //       });
  //     }

  //     if (parseInt(id) === 1) {
  //       axios.post(`/api/oauth/login/${id}`).then((res) => {
  //         if (res.status === 200) {
  //           console.log(login({ name: res.data[0].name, email: res.data[0].email }));
  //           //   setUserData(login({ name: res.data[0].name, email: res.data[0].email }))
  //           console.log('1', isLogIn);
  //           //   revalidate();
  //         }
  //       });
  //     }
  //   },
  //   [],
  // );

  const onClickGithub = useCallback(() => {
    axios.get('/api/', { withCredentials: true }).then((res) => console.log(res.data));
  }, []);

  const onClickKAKAO = useCallback(() => {
    const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_URL}`;

    window.open(url);
  }, []);
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
      </ContactWrap>
      <KakaoBtn onClick={onClickKAKAO} />
      {/* <Link to="/signup">
        <GithubBtn />
      </Link> */}
      <GithubBtn onClick={onClickGithub} />
      {/* <a href="https://localhost:3333/api/auth/github/callback">
        <GithubBtn />
      </a> */}
    </LoginWrap>
  );
};

export default Login;

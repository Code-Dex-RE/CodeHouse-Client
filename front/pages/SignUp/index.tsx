import React, { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { Link, RouteComponentProps, Redirect } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { useCookies, Cookies } from 'react-cookie';
import useInput from '@hooks/useInput';
import { useQuery } from 'react-query';

import {
  CancleBtn,
  Header,
  Input,
  Label,
  SignUpBtn,
  SignUpWrap,
  NameColum,
  BioColum,
  EmailColum,
  ButtonColum,
  SignUpForm,
} from './style';

const SignUp = ({ history }: RouteComponentProps) => {
  const [name, onChangeName, setName] = useInput('');
  const [singUpError, setSignUpError] = useState(false);
  const [singUpSuccess, setSignUpSuccess] = useState(false);
  const [email, onChangeEmail, setEmail] = useInput('');
  const [bio, onChangeBio] = useInput('');
  const [isSingUp, setIsSignUp] = useState(false);
  const [cookies, setCookie] = useCookies(['jwt']);
  // axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.jwt}`;
  // axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
  // const instance = axios.create({
  //   baseURL: 'http://localhost:8000',
  // });

  // instance.defaults.headers.common['Authorization'] = `Bearer abccccc`;
  // instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  const config = {
    headers: { Authorization: `Bearer ${cookies.jwt}` },
  };

  const bodyParameters = {
    name: name,
    bio: bio,
  };

  console.log('jwt', cookies);
  console.log(cookies.jwt);

  useEffect(() => {
    axios.get('/api/auth/me', { withCredentials: true }).then((res: AxiosResponse) => {
      console.log(res.data);
      setEmail(res.data.email);
      setName(res.data.name);
    });
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      return axios
        .post(`/api/auth`, bodyParameters)
        .then((res) => {
          history.push('/');
          console.log(res.headers);
          setIsSignUp(true);
        })
        .catch((error) => {
          setSignUpError(error.response?.data?.statusCode === 403);
        });
    },
    [name, bio],
  );

  // const onSubmit = useCallback((e) => {
  //   e.preventDefault();

  //   axios
  //     .get(`/api/auth/test`)
  //     .then((res) => {
  //       console.log(res.status);
  //       setIsSignUp(true);
  //       console.log('TestGet');
  //     })
  //     .catch((error) => {
  //       setSignUpError(error.response?.data?.statusCode === 403);
  //     });
  // }, []);

  // console.log('성공', singUpSuccess);
  // console.log('에러', singUpError);

  // if (isSingUp) {
  //   return <Redirect to="/" />;
  // }

  return (
    <SignUpWrap>
      <Header>
        <h2>Welcom CodeHouse</h2>
        <h3>please input basic member information</h3>
      </Header>
      <SignUpForm onSubmit={onSubmit}>
        <NameColum>
          <Label>Name</Label>
          <Input type="text" value={name} onChange={onChangeName} placeholder="Input name" />
        </NameColum>
        <EmailColum>
          <Label>email</Label>
          <Input type="email" value={email} readOnly />
        </EmailColum>
        <BioColum>
          <Label>Bio</Label>
          <Input type="text" value={bio} onChange={onChangeBio} placeholder="Input Bio" />
        </BioColum>
        <ButtonColum>
          <CancleBtn>Cancle</CancleBtn>
          <SignUpBtn type="submit">Sign Up</SignUpBtn>
        </ButtonColum>
      </SignUpForm>
    </SignUpWrap>
  );
};

export default SignUp;

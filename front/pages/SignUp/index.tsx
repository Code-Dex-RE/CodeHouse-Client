import React, { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';
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

const SignUp = () => {
  const [name, onChangeName, setName] = useInput('');
  const [singUpError, setSignUpError] = useState(false);
  const [singUpSuccess, setSignUpSuccess] = useState(false);
  const [email, onChangeEmail, setEmail] = useInput('');
  const [bio, onChangeBio] = useInput('');

  const { data: userData, error } = useQuery('suceessUser', async () => {
    axios.get('api/auth/me');
  });

  useEffect(() => {
    axios.get('/api/auth/me', { withCredentials: true }).then((res: AxiosResponse) => {
      console.log(res.data);
      setEmail(res.data.email);
      setName(res.data.name);
    });
  }, []);
  console.log();

  const onSubmit = useCallback(() => {
    axios
      .post(`/api/auth`, { name, bio })
      .then((res) => {
        // axios.defaults.headers.common['Authoriztion'] = `Bears ${token}`;

        setSignUpSuccess(true);
      })
      .catch((error) => {
        setSignUpError(error.response?.data?.statusCode === 403);
      });
  }, [name, email, bio]);

  console.log('성공', singUpSuccess);
  console.log('에러', singUpError);

  if (userData) {
    return <Redirect to="/" />;
  }
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

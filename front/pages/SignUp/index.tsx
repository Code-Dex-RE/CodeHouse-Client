import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import useUser from '@hooks/userHook';
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
  const { userData, isLogIn } = useUser();
  const [isSign, setSing] = useState(true);
  const [userName, setUserName] = useState('');

  // if (userData) {
  //   setUserName(userData.name);
  // }

  if (isSign && !isLogIn) {
    return <Redirect to="/login" />;
  }

  return (
    <SignUpWrap>
      <Header>
        <h2>Welcome to CodeHouse</h2>
        <h3>please input basic member information</h3>
      </Header>
      <SignUpForm>
        <NameColum>
          <Label>Name</Label>
          {userData && <Input type="text" value={userData.name} />}
        </NameColum>
        <EmailColum>
          <Label>email</Label>
          {userData && <Input type="email" value={userData.email} readOnly />}
        </EmailColum>
        <BioColum>
          <Label>Bio</Label>
          <Input type="text" />
        </BioColum>
      </SignUpForm>
      <ButtonColum>
        <CancleBtn>Cancle</CancleBtn>
        <SignUpBtn>Sign Up</SignUpBtn>
      </ButtonColum>
    </SignUpWrap>
  );
};

export default SignUp;

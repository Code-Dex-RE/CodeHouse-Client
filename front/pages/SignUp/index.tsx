import React, { useCallback } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
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
  const isLoggin = false;
  // const onTest = useCallback(
  //   (id) => () => {
  //     if (id === 2) {
  //       return <Redirect to="/login" />;
  //     }
  //   },
  //   [],
  // );

  return (
    <SignUpWrap>
      <Header>
        <h2>Welcom CodeHouse</h2>
        <h3>please input basic member information</h3>
      </Header>
      <SignUpForm>
        <NameColum>
          <Label>Name</Label>
          <Input type="text" />
        </NameColum>
        <EmailColum>
          <Label>email</Label>

          <Input type="email" />
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

import React from 'react';

import {
    LoginWrap,
    Logo,
    FormWrap,
    Title,
    Descript,
    KakaoBtn,
    GithubBtn
} from './styles';

const Login = () => {
    return(
        <LoginWrap>
            <Logo>CodeHouse</Logo>
            <FormWrap>
                <Title>Welcome to CodeHouse!</Title>
                <Descript>Login to Enjoy CodeHouse</Descript>
            </FormWrap>
            <KakaoBtn />
            <GithubBtn />
        </LoginWrap>
    );
};

export default Login;

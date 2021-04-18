import styled from 'styled-components';

export const LoginWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1160px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
`;

export const Logo = styled.div`
  position: relative;
  top: calc(10%);
  left: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 50px;
  margin: 0 auto;
  padding-left: 80px;
  background: url(../../assets/codelog.png) no-repeat left;
  background-size: 103px auto;
  font-size: 43px;
  font-weight: bold;
  line-height: 43px;
`;

export const ContactWrap = styled.div`
  position: relative;
  top: calc(15%);
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 70%;
  margin: 0 auto;
  background-color: #333333;
  border-radius: 18px;
`;

export const Title = styled.h1`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 600px;
  margin: 0 auto;
  padding-top: 80px;
  font-size: 50px;
  color: #ffffff;
`;

export const Descript = styled.p`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 530px;
  margin: 0 auto;
  font-size: 42px;
  color: #ebebeb;
`;

export const KakaoBtn = styled.div`
  position: relative;
  top: -20%;
  left: 0;
  bottom: 0;
  right: 0;
  width: 600px;
  height: 90px;
  margin: 0 auto;
  background: url(../../assets/kakao_login_large_wide.png);
  cursor: pointer;
`;

export const GithubBtn = styled.div`
  position: relative;
  top: -17%;
  left: 0;
  bottom: 0;
  right: 0;
  width: 600px;
  height: 90px;
  margin: 0 auto;
  background: url(../../assets/githubLogin.png);
  cursor: pointer;
`;

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
  width: 330px;
  height: 50px;
  margin: 0 auto;
  margin-top: 30px;
  padding-left: 80px;
  background: url(../../assets/codelog.png) no-repeat left;
  background-size: 103px auto;
  font-size: 43px;
  font-weight: bold;
  line-height: 43px;
`;

export const ContactWrap = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;
  background-color: #333333;
  border-radius: 18px;
  @media only screen and (max-width: 1280px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  padding-top: 70px;
  margin-bottom: 10px;
  font-size: 50px;
  color: #ffffff;
  @media only screen and (max-width: 1280px) {
    font-size: 45px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 40px;
    padding-top: 50px;
  }
`;

export const Descript = styled.p`
  width:100%;
  text-align: center;
  font-size: 42px;
  color: #ebebeb;
  margin-bottom: 50px;
  margin-top: 0;
  @media only screen and (max-width: 1280px) {
    font-size: 35px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 24px;
  }
`;

export const KakaoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 600px;
  height: 80px;
  margin: 0 auto;
  background: url(/assets/kakao_icon.png) no-repeat 20px #fee500;
  cursor: pointer;
  border-radius: 5px;
  font-size: 28px;
  margin-bottom: 20px;
  &:hover{
    font-style: italic;
  }
  @media only screen and (max-width: 1280px) {
    width: 400px;
    font-size: 24px;
  }
  @media only screen and (max-width: 767px) {
    width: 80%;
    height: 60px;
    font-size: 20px;
    background-size: 25px 25px;
  }
`;

export const GithubBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 600px;
  height: 80px;
  margin: 0 auto;
  background: url(/assets/github_icon.png) no-repeat 20px #fff;
  font-size: 28px;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    font-style: italic;
  }
  @media only screen and (max-width: 1280px) {
    width: 400px;
    font-size: 24px;
  }
  @media only screen and (max-width: 767px) {
    width: 80%;
    height: 60px;
    font-size: 20px;
    background-size: 25px 25px;
  }
`;

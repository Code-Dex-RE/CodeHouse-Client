import styled from 'styled-components';
import {device} from '../../device/device';

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

  @media ${device.laptop} { 
    max-width: 900px;
  }

  @media ${device.tablet} { 
    width: 100%;
    padding: 0 15px;
  }
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

  @media ${device.mobileL} { 
    font-size: 34px;
  }

  @media ${device.mobileS} { 
    font-size: 30px;
  }
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

  @media ${device.mobileL} { 
    height: 60%;
  }
`;

export const Title = styled.h1`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding-top: 80px;
  font-size: 50px;
  color: #ffffff;

  @media ${device.tablet} { 
    padding-top: 60px;
    font-size: 36px;
  }

  @media ${device.mobileL} { 
    text-align: center;
    padding-top: 40px;
    font-size: 24px;
  }

  @media ${device.mobileS} { 
    font-size: 20px;
  }
`;

export const Descript = styled.p`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  font-size: 42px;
  color: #ebebeb;

  @media ${device.tablet} { 
    font-size: 30px;
  }

  @media ${device.mobileL} { 
    font-size: 20px;
  }

  @media ${device.mobileS} { 
    font-size: 18px;
  }
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

  @media ${device.tablet} { 
    width: 400px;
    height: 60px;
    background-size: 400px 60px;
  }

  @media ${device.mobileL} { 
    width: 300px;
    height: 45px;
    background-size: 300px 45px;
  }

  @media ${device.mobileS} { 
    width: 240px;
    height: 36px;
    background-size: 240px 36px;
  }
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

  @media ${device.tablet} { 
    width: 400px;
    height: 60px;
    background-size: 400px 60px;
  }

  @media ${device.mobileL} { 
    width: 300px;
    height: 45px;
    background-size: 300px 45px;
  }

  @media ${device.mobileS} { 
    width: 240px;
    height: 36px;
    background-size: 240px 36px;
  }
`;


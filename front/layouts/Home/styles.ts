import styled from 'styled-components';
// import SunSVG from '@assets/sun.svg'
// import MoonSVG from '@assets/moon.svg'

export const HomeWrap = styled.div`
  max-width: 1160px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;

`;

export const Header = styled.header`
  width: 100%;
  height: 50px;
  max-width: 1160px;
`;

export const LeftMenu = styled.div`
  float:left;
  width: 250px;
`;

export const LogoTitle = styled.div`
  width: 300px;
  height: 50px;
  background: url(../../assets/codelog.png) no-repeat left;
  background-size: 103px auto;

  
  @media only screen and (max-width: 1280px) {width: 300px;
    background-size: 95px auto;
  }
  @media only screen and (max-width: 767px) {
    background-size: 80px auto;
  }

  & a {
    font-size: 43px;
    font-weight: bold;
    line-height: 43px;
    padding-left: 80px;
    @media only screen and (max-width: 1280px) {
      font-size: 38px;
      padding-left: 70px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 28px;
      padding-left: 60px;
    }
  }
`;

export const RightMenu = styled.div`
  float:right;
  & a {
    height: 50px;
    margin-right: 35px;
    vertical-align: top;
    /*line-height: 50px;*/
    display: inline-block;
  }

  & > span {
    margin-right: 20px;
    @media only screen and (max-width: 1280px) {width: 300px;
      margin-right: 15px;
    }
    @media only screen and (max-width: 767px) {
      margin-right: 10px;
    }
  }
`;

export const ProfileImg = styled.img`
vertical-align: middle;
width: 40px;
height: 40px;
border-radius: 20px;
}
`;

export const ProfileModal = styled.div`
  display: flex;
  padding: 20px;
  width: 200px;

  & > img {
    width: 40px;
    height: 28px;
    border-radius: 15px;
  }

  & > div {
    width: 200px;
  }

  & #profile-name {
    font-weight: bold;
    display: block;
  }
  & #profile-profile {
    font-size: 13px;
    display: block;
  }
  & #profile-active {
    font-size: 13px;
    margin-top: 10px;
    display: block;
  }
`;

export const ThmemBtn = styled.button`
  height: 50px;
  border: 0;
  background: none;
  vertical-align: middle;
`;

// export const LightIcon = styled(SunSVG)`

// `;

export const Main = styled.main`
  width: 90%;
  margin: 0 auto;
`;

export const MainTitle = styled.h2`
  font-size: 70px;
  line-height: 1;
  color: #333333;
  br{
    display: none;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 55px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 55px;
    br{
      display: block;
    }
  }
  @media only screen and (max-width: 767px) {
    font-size: 28px;
    br{
      display: block;
    }
  }
`;

export const MainContent = styled.p`
  font-size: 20px;
  color: #666666;
  margin-bottom: 40px;
  @media only screen and (max-width: 1024px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const MainImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const Ends = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const CreateBtn = styled.button`
  width: 48%;
  height: 70px;
  margin-right: 5px;
  font-size: 35px;
  border-radius: 10px;
  color: FFFFFF;
  background-color: 333333;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    background-color: ffffff;
    color: 333333;
    border: 333333;
  }
  @media only screen and (max-width: 1024px) {
    width: 55%;
    margin: 5px auto;
    display: block;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    width: 65%;
    height: 50px;
    margin: 5px auto;
    display: block;
  }
`;
export const JoinBtn = styled.button`
  width: 48%;
  height: 70px;
  margin-left: 3%;
  font-size: 35px;
  border-radius: 10px;
  color: ffffff;
  background-color: 333333;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    background-color: ffffff;
    color: 333333;
    border: 333333;
  }
  @media only screen and (max-width: 1024px) {
    width: 55%;
    margin: 5px auto;
    display: block;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    width: 65%;
    height: 50px;
    margin: 5px auto;
    display: block;
  }
`;

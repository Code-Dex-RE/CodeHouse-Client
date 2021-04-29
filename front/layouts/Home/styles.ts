import styled from 'styled-components';
import {device} from '../../device/device';
// import SunSVG from '@assets/sun.svg'
// import MoonSVG from '@assets/moon.svg'

export const HomeWrap = styled.div`
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

export const Header = styled.header`
  width: 100%;
  height: 10%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.laptop} { 
    max-width: 900px;
  }

  @media ${device.tablet} { 
    width: 100%;
    padding: 0 15px;
  }
`;

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: -22px;

  & a {
    overflow: hidden;
  }
`;

export const LogoTitle = styled.div`
  width: 300px;
  height: 50px;
  background: url(../../assets/codelog.png) no-repeat left;
  background-size: 103px auto;

  & a {
    font-size: 43px;
    font-weight: bold;
    line-height: 43px;
    padding-left: 80px;

    @media ${device.tablet} { 
      font-size: 28px;
    }

    @media ${device.mobileL} { 
      font-size: 22px;
    }

    @media ${device.mobileS} { 
      font-size: 16px;
    }
  }

  @media ${device.tablet} { 
    width: 150px;
  }
`;

export const RightMenu = styled.div`
  height: 100%;
  padding-top: 15px;
  & a {
    height: 50px;
    margin-right: 35px;
    vertical-align: top;
    /*line-height: 50px;*/
    display: inline-block;
  }

  & > span {
    margin-right: 21px;

    @media ${device.mobileM} { 
      margin-right: 0;
    }
  }
`;

export const ProfileImg = styled.img`
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 20px;
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
  max-width: 1160px;
  margin: 0 auto;
`;

export const MainTitle = styled.h2`
  font-size: 70px;
  line-height: 1;
  color: #333333;

  @media ${device.laptop} { 
    font-size: 46px;
  }

  @media ${device.tablet} { 
    font-size: 36px;
  }

  @media ${device.mobileL} { 
    font-size: 24px;
  }

  @media ${device.mobileS} { 
    font-size: 20px;
  }
`;

export const MainContent = styled.p`
  font-size: 34px;
  color: #666666;

  @media ${device.laptop} { 
    font-size: 30px;
  }

  @media ${device.tablet} { 
    font-size: 26px;
  }

  @media ${device.mobileL} { 
    font-size: 18px;
  }

  @media ${device.mobileS} { 
    font-size: 16px;
  }
`;

export const MainImg = styled.img`
  width: 1160px;
  height: 400px;
  border-radius: 5px;
  background: url(../../assets/mainImg.jpeg) no-repeat center;
  background-size: cover;

  @media ${device.laptop} { 
    width: 100%;
    height: 360px;
  }

  @media ${device.tablet} { 
    height: 300px;
  }

  @media ${device.mobileM} { 
    height: 240px;
  }
`;

export const Ends = styled.div`
  max-width:1160px
  max-height:71px;
  margin-top:20px;
  text-align:center;

  @media ${device.laptop} { 
    width: 100%;
  }
`;

export const CreateBtn = styled.button`
  width: 49%;
  height: 71px;
  margin-right: 1%;
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

  @media ${device.tablet} { 
    font-size: 24px;
  }

  @media ${device.mobileM} { 
    font-size: 16px;
    height: 50px;
  }
`;
export const JoinBtn = styled.button`
  width: 49%;
  height: 71px;
  margin-left: 1%;
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

  @media ${device.tablet} { 
    font-size: 24px;
  }

  @media ${device.mobileM} { 
    font-size: 16px;
    height: 50px;
  }
`;

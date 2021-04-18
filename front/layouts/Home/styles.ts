import styled from 'styled-components';
// import SunSVG from '@assets/sun.svg'
// import MoonSVG from '@assets/moon.svg'

export const HomeWrap = styled.div`
  max-width: 1920px;
  min-width: 1200px;
  background-color: FFFFFF;
`;

export const Header = styled.header`
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
`;

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: -22px;

  & a {
    overflow: hidden;
  }
`;

export const LogoTitle = styled.h1`
  margin: 0;
  font-size: 43px;

  & a {
    padding-left: 85px;
    background: url(../../assets/codelog.png) no-repeat left -10px;
    background-size: 103px auto;
    height: 100%;
    display: inline-block;
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
`;

export const ProfileImg = styled.img`
width: 40px;
height: 40px;
border-radius: 7px;
}
`;

export const ProfileModal = styled.div`
  display: flex;
  padding: 20px;
  width: 200px;

  & img {
    width: 20px;
    height: 20px;
    border-radius: 7px;
  }

  & > div {
    flex-direction: column;
    margin-left: 10px;
    display: inline-block;
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
  font-size: 84px;

  margin-bottom: -6px;
`;

export const MainContent = styled.p`
  color: 898989;
  font-size: 41px;
  margin-bottom: 24px;
`;

export const MainImg = styled.img`
  width: 1160px;
  height: 400px;
`;

export const Ends = styled.div`
  max-width:1160px
  max-height:71px;
  margin-top:20px;
  text-align:center;
`;

export const CreateBtn = styled.button`
  width: 577px;
  height: 71px;
  margin-right: 3px;
  font-size: 35px;
  border-radius: 5px;
  color: FFFFFF;
  background-color: 333333;
`;
export const JoinBtn = styled.button`
  width: 577px;
  height: 71px;
  margin-left: 3px;
  font-size: 35px;
  border-radius: 5px;
  color: FFFFFF;
  background-color: 333333;
`;

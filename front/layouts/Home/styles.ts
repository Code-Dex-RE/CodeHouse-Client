import styled from 'styled-components';
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
`;

export const Header = styled.header`
  width: 100%;
  height: 10%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
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
  max-width: 1160px;
  margin: 0 auto;
`;

export const MainTitle = styled.h2`
  font-size: 70px;
  line-height: 1;
  color: #333333;
`;

export const MainContent = styled.p`
  font-size: 34px;
  color: #666666;
`;

export const MainImg = styled.img`
  width: 1160px;
  height: 400px;
  border-radius: 5px;
`;

export const Ends = styled.div`
  max-width:1160px
  max-height:71px;
  margin-top:20px;
  text-align:center;
`;

export const CreateBtn = styled.button`
  width: 575px;
  height: 71px;
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
`;
export const JoinBtn = styled.button`
  width: 575px;
  height: 71px;
  margin-left: 5px;
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
`;

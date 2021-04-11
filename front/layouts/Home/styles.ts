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
`;

export const LogoImg = styled.img`
  max-width: 149px;
  max-height: 112px;
  margin-right: -23px;
`;

export const LogoTitle = styled.h1`
  font-size: 43px;
`;

export const RightMenu = styled.div`
  margin: 6px 38px 0 0px;
`;

export const LoginSpan = styled.span`
  font-size: 38px;
  margin-right: 35px;
  font-weight: 600;
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

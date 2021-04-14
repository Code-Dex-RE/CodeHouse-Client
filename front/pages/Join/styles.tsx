import styled from 'styled-components';

export const JoinWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1160px;
  top: 0; left: 0; bottom: 0; right: 0; margin: 0 auto; 
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1160px;
`;

export const Logo = styled.div`
  width: 300px;
  height: 80px;
  padding-left: 80px;
  background: url(../../assets/codelog.png) no-repeat left;
  background-size: 103px auto;
  font-size: 43px;
  font-weight: bold;
  line-height: 75px;
`;

export const Profile = styled.div`
    font-size: 30px;
    line-height: 80px;
`;

export const RefreshBtn = styled.button`
  width: 120px;
  height: 40px;
  margin: 30px 0;
  line-height: 38px;
  text-align: left;
  border: none;
  border-radius: 5px;
  background: url(../../assets/refreshBtn.png) no-repeat 84px center;
  background-size: 26px 26px;
  background-color: cccccc;
  color: 333333;
  font-size: 20px;
  cursor: pointer;
`;

export const RoomWrap = styled.div`
  max-width: 1160px;
  height: 60%;
  background-color: 999999;
`;

export const CreateBtn = styled.button`
  position: relative;
  left: calc(50% - 240px);
  width: 480px;
  height: 65px;
  margin-top: 40px;
  line-height: 60px;
  border-radius: 7px;
  background-color: 333333;
  color: ffffff;
  font-size: 35px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
  cursor: pointer;
  &:hover{
    background-color: ffffff;
    color: 333333;
  }
`;
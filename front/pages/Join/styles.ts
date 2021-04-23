import styled from 'styled-components';

export const JoinWrap = styled.div`
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

export const RefreshBtn = styled.button`
  width: 120px;
  height: 40px;
  margin: 30px 0;
  line-height: 38px;
  text-align: left;

  border-radius: 4px;
  background: url(../../assets/refresh.svg) no-repeat 84px center;
  background-size: 26px 26px;
  background-color: 333333;
  color: ffffff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: ffffff;
    color: 333333;
  }
`;

export const RoomWrap = styled.div`
  max-width: 1160px;
  height: 60%;
  background-color: 999999;
`;

export const CreateBtn = styled.button`
  width: 142px;
  height: 40px;
  background-color: 333333;
  color: ffffff;
  font-size: 20px;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 30%);
  margin: 30px 0;
  cursor: pointer;
  float: right;
  border-radius: 4px;
  &:hover {
    background-color: ffffff;
    color: 333333;
  }
`;

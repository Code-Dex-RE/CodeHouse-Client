import styled from 'styled-components';

export const CreateWrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Modal = styled.div`
  position: absolute;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 300px;
  padding: 40px;
  background-color: #fdfdfd;
`;

export const CloseBtn = styled.button`
  background: url(../assets/closeBtn.png) no-repeat right;
  float: right;
  width: 30px;
  height: 30px;
  border: none;
  background-size: 30px 30px;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 14px;
`;

export const Form = styled.form``;

export const Name = styled.input`
  width: 100%;
  height: 40px;
`;

export const Descript = styled.input`
  width: 100%;
  height: 94px;
`;

export const BtnWrap = styled.div`
  & > button {
    font-size: 17px;
  }
`;
export const CancelBtn = styled.button`
  background-color: ffffff;
  width: 97px;
  height: 31px;
  border-radius: 4px;
  margin-right: 12px;
`;
export const CreateBtn = styled.button`
  background-color: 333333;
  width: 128px;
  height: 31px;
  border-radius: 4px;
  color: white;
`;

export const Error = styled.div`
  color: #e01e5a;
`;

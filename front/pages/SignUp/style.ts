import styled from 'styled-components';
import {device} from '../../device/device';

export const SignUpWrap = styled.div`
  width: 100%;
  max-width: 1160px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    width: 100%;
    padding: 0 15px;
  }
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1160px;
  text-align: center;
  & h2 {
    font-size: 50px;
    margin: 0;

    @media ${device.tablet} {
      font-size: 34px;
    }

    @media ${device.mobileM} {
      font-size: 24px;
    }
  }
  & h3 {
    margin-top: 0;
    font-size: 40px;

    @media ${device.tablet} {
      font-size: 30px;
    }

    @media ${device.mobileM} {
      font-size: 20px;
    }
  }
`;

export const NameColum = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  & input{
      margin-left:48px;
      margin-bottom: 53px;

  }
`;

export const EmailColum = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
 & input{
    margin-left:56px;
    margin-bottom: 68px;

 }
}
`;

export const BioColum = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 74px;
  & input{
      margin-left:75px;
  }
  & label{
      padding-left:17px;

      @media ${device.mobileM} {
        padding-left: 0;
      }
  }
`;

export const SignUpForm = styled.form``;

export const Label = styled.label`
  font-size: 38px;

  @media ${device.tablet} {
    font-size: 30px;
  }

  @media ${device.mobileM} {
    font-size: 24px;
  }  
`;

export const Input = styled.input`
  border:none;
  border-bottom:2px solid;
  width: 100%;
  max-width: 400px;
  font-size: 26px;

  @media ${device.tablet} {
    width: 400px;
  }

  @media ${device.mobileL} {
    width: 200px;
  }

  @media ${device.mobileS} {
    width: 160px;
  }
`;
export const ButtonColum = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align:center;
`;

export const CancleBtn = styled.button`
  width: 40%;
  height: 42px;
  margin-right: 2%;
  font-size: 20px;
  background-color: FFFFFF;
  border-radius: 7px;
  cursor: pointer;
`;

export const SignUpBtn = styled.button`
  width: 58%;
  height: 42px;
  float: right;
  font-size: 20px;
  background-color: 333333;
  border-radius: 7px;
  color: FFFFFF;
  cursor: pointer;
`;

import styled from 'styled-components';

export const SignUpWrap = styled.div`
  width: 100%;
  max-width: 1160px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1160px;
  text-align: center;
  & h2 {
    font-size: 50px;
    margin: 0;
  }
  & h3 {
    margin-top: 0;
    font-size: 40px;
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
}
}
`;

export const SignUpForm = styled.form``;

export const Label = styled.label`
  font-size: 38px;
`;

export const Input = styled.input`
border:none;
border-bottom:2px solid;
width: 100%;
max-width: 400px;
}
`;
export const ButtonColum = styled.div`
width: 100%;
max-width: 600px;
margin: 0 auto;
text-align:center;
}
`;

export const CancleBtn = styled.button`
  width: 150px;
  height: 42px;
  margin-left: 117px;
  font-size: 20px;
  background-color: FFFFFF;
  border-radius: 7px;
`;

export const SignUpBtn = styled.button`
  width: 220px;
  height: 42px;
  float: right;
  margin-right: 53px;
  font-size: 20px;
  background-color: 333333;
  border-radius: 7px;
  color: FFFFFF;
`;

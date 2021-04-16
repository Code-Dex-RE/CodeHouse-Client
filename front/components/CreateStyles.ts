import styled from 'styled-components';

export const CreateWrap = styled.div`
    position: relative;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: 000000;
`;

export const Modal = styled.div`
    position: absolute;
    top: 20%; bottom: 0; left: 0; right: 0;
    width: 50%;
    height: 60%;
    margin: 0 auto;
    background-color: ffffff;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 10px; right: 10px;
    width: 50px;
    height: 50px;
    border: none;
    background: url(../assets/closeBtn.png) no-repeat right;
    background-size: 50px 50px;
    cursor: pointer;
`;

export const Title = styled.h2`
    width: 100%;
    height: 20%;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #000000;
`;

export const Form = styled.div`
    position: relative;
    width: 70%;
    height: 30%;
    margin: 0 auto;
`;

export const Name = styled.input`
    position: absolute;
    top: 0;
    width: 100%;
    height: 40%;
    border: 2px solid #333;
    font-size: 1.75rem;
`;

export const Descript = styled.input`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    border: 2px solid #333;
    font-size: 1.75rem;
`;

export const BtnWrap = styled.div`
    width: 70%;
    height: 10%;
    margin: 40px auto 0;
`;
export const CancelBtn = styled.button`
    width: 39%;
    height: 100%;
    margin-right: 2%;
    border: 1px solid #333;
    border-radius: 8px;
    font-size: 1.75rem;
    color: #333;
    cursor: pointer;
    &:hover{
        color: #333;
        border: none;
        background-color: #999;
    }
`;
export const CreateBtn = styled.button`
    width: 59%;
    height: 100%;
    border: none;
    background-color: #333;
    border-radius: 8px;
    font-size: 1.75rem;
    color: #fff;
    cursor: pointer;
    &:hover{
        color: #333;
        border: none;
        background-color: #999;
    }
`;
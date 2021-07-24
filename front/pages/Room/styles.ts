import styled from 'styled-components';

export const RoomArea = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1160px;
  margin: 0 auto;
`;

export const Head = styled.header`
  width: 100%;
  height: 10%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Right = styled.div``;

export const Left = styled.div``;

export const ChatMainBox = styled.div`
display: flex;
width: 100%;
max-width: 1160px;
height: 100%;
max-height:600px;
column-gap: 7px;
}
`;

export const SideList = styled.div`
  width: 100%;
  max-width: 250px;
  background-color: #e9ebee;
  color: #000;
  border-radius: 7px;
  & > div {
    padding: 20px 21px;
    font-size: 1.5rem;
    height: 52px;
  }

  & > hr{
    width:83%;
    margin-top:25px;
  }
  & > ul{
    list-style:none;
    padding: 0 22px;
    li{
      padding : 3px;
      img{
        border-radius:100%
      }
    }
  }
`;

export const ChatWrap = styled.div`
border-radius: 7px;
  max-width: 910px;
  width: 100%;
  height: 100%;
  max-height: 600px;
  background-color: #e9ebee;
  color: #000;
`;

export const ChatContent = styled.div`
  height: 91%;
  max-height: 92%;
  position: relative;
`;

export const ChatList = styled.div`
  width: 100%;
  position: absolute;
  overflow-y: auto;
  left: 0;
  max-height: 100%;
  bottom: 0;
  padding: 38px 20px;
  word-break: break-all;

  & > div {
   display:flex;
    margin-top:16px;
   img {
    border-radius: 100%;
    height: 35px;
   }
   div {
    display: flex;
    flex-direction: column;
    margin-left: 9px;
   }
  }
`;

export const ChatBox = styled.div`
  height: 100%;
  max-height: 8%;
  width:96%;
  position: relative;
  overflow: hidden;
  margin: -9px auto;
  border-radius: 5px;
  & form {
    display: flex;
    height: 100%;
    position: relative;
    & > input {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border: none;
      color: #000;
      outline: none;
      font-size: 1.1rem;
      padding: 0 20px;
    }

    & > button {
      position: absolute;
      top: 0;
      z-index: 1;
      width: 7%;
      height: 100%;
      background-color:#3F6797 ;
      border: none;
      color: ffffff;
      cursor: pointer;
      right: 0;
      &:hover {
        color: C5C2C2;
        border: C5C2C2;
      }
    }
  }
`;

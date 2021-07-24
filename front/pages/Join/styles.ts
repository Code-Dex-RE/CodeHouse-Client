
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
  width: 100%;
  height: 100%;
`;

export const ListsRoom = styled.div`
     display:flex;
     max-width:1160px;

     margin: 0 auto;
     column-gap:10px;
  
`;

export const ContactRoomWrap=styled.div`
    position:relative;
    border-radius: 6px;
    width: 52%;
    height:630px;
    background-color:e9ebee;
    & > div{ 
      display: flex;
    flex-direction: inherit;
    padding: 11px 32px;
}
    span{
      font-size: 21px;
      font-weight: 500;
    }

    button{
      margin-left: auto;
    border: none;
    background-color: #3F6797;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    padding:11px;
      :hover{
        background-color: e3e3e3;
        color: #fff;
      }
    }

  }
  & > ul{
      position: absolute;
      width: 100%;
      max-height: 544px;
      list-style: none;
      padding: 0;
      overflow-y: auto;
      margin: 0;
     &::-webkit-scrollbar{
       display:none;
     }
     }
    
     & li {
      padding: 7px 27px;
       span{
      color: 33333;
      font-size: 31px;
      font-weight: bold;
     }
     p{
       margin 0 0;
     }
    }

`;

export const ContactRoom=styled.div`
    background-color:ffffff;
    box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 30%);
    height: 119px;
    width: 90%;
    border-radius: 5px;
    margin: 14px auto;
`;

export const LeftSide=styled.div`
    border-radius: 6px;
     width: 20%;
     height:630px;
     background-color:e9ebee;
     & > span{
      font-size: 22px;
      font-weight: 500;
      display:block;
      margin: 10px 16px;
     }


`;
export const OnlineWrap=styled.div`
     margin:0 20px;
  &  > span{
    font-size:11px;
    font-weight: 800;
  }
& ul{
  list-style: none;
  padding: 0 7px;
  margin: 7px 0;

    .user--top--presence-online{
         margin: 11px 0;
      i > img{
        border-radius:11px;
      }

      span{
        font-weight: 600;
        vertical-align: super;
        padding: 0 6px;
      }
    }

    .user--top--presence-offline{
      display:none;
  }
}

`;
export const OfflineWrap=styled.div`
margin:0 20px;
&  > span{
  font-size:11px;
  font-weight: 800;
}
& ul{
list-style: none;
padding: 0 7px;
margin: 7px 0;

  .user--bottom--presence-offline{
    margin: 11px 0;
    i > img{
      opacity: 0.6;
      border-radius:11px;
    }

    span{
      font-weight:300;
      vertical-align: super;
      padding: 0 6px;
    }
  }

  .user--bottom--presence-online{
    display:none;
  }
}

`;

export const RightSide=styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  width: 27%;
  height:325px;
  background-color:e9ebee;
   & > i{
    text-align: center;
    padding: 31px 0;
  }

    img{
      border-radius: 31px; 
    }

    }
    & > span{
      text-align: center;
      margin-top: -13px;
      font-size: 18px;
      font-weight: 700;
    }
    
    & > p{
      font-weight: 300;
      text-align:center;
    }
   & > div {
     text-align:center;
     button{
       cursor:pointer;
      border: none;
      border-radius: 7px;
      background-color:#3F6797;
      color: #fff;
      font-size: 14px;
      padding: 10px 45px;
      :hover{
        background-color : e3e3e3;
      }
     }
   }   

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

  border-radius: 4px;
  &:hover {
    background-color: ffffff;
    color: #000;
  }
`;


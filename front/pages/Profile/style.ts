import styled from 'styled-components';

export const ProfileWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 1160px;
    top: 0; left: 0; bottom: 0; right: 0; margin: 0 auto; 
`;
export const Header = styled.div`
    max-width: 1160px;
    height: 10%;
`;
export const Logo = styled.div`
    width: 300px;
    height: 85px;
    padding-left: 80px;
    background: url(../../assets/codelog.png) no-repeat left;
    background-size: 103px auto;
    font-size: 43px;
    font-weight: bold;
    line-height: 80px;
`;
export const MainWrap = styled.div`
    display: flex;
    width: 100%;
    height: 90%;
`;
export const ModifyWrap = styled.div`
    position: relative;
    width: 60%;
    height: 100%;
`;
export const RoomWrap = styled.div`
    position: relative;
    width: 40%;
    height: 100%;
    padding: 60px 0 60px 120px;
`;
export const ProfileImg = styled.img`
    position: absolute;
    top: 10%;
    left: calc(50% - 90px);
    width: 180px;
    height: 180px;
    border-radius: 100%;
`;
export const ImgDeleteBtn = styled.button`
    position: absolute;
    top: 35%;
    left: calc(50% - 140px);
    width: 120px;
    height: 40px;
    background-color: #333;
    border: 2px solid #333;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        color: #333;
    }
`;
export const ImgModifyBtn = styled.button`
    position: absolute;
    top: 35%;
    left: calc(50% + 20px);
    width: 120px;
    height: 40px;
    background-color: #333;
    border: 2px solid #333;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        color: #333;
    }
`;
export const UserName = styled.div`
    position: absolute;
    top: 45%;
    width: 100%;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
`;
export const NameEdit = styled.img`
    position: absolute;
    top: 45%;
    right: 0;
    cursor: pointer;
`;
export const UserDescript = styled.div`
    position: absolute;
    top: 55%;
    width: 100%;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
`;
export const DescriptEdit = styled.img`
    position: absolute;
    top: 55%;
    right: 0;
    cursor: pointer;
`;
export const SaveBtn = styled.button`
    position: absolute;
    top: 70%;
    left: calc(50% - 200px);
    width: 120px;
    height: 40px;
    background-color: #333;
    border: 2px solid #333;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        color: #333;
    }
`;
export const MicBtn = styled.button`
    position: absolute;
    top: 70%;
    left: calc(50% - 60px);
    width: 120px;
    height: 40px;
    background-color: #333;
    border: 2px solid #333;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        color: #333;
    }
`;
export const VolumeBtn = styled.button`
    position: absolute;
    top: 70%;   
    left: calc(50% + 80px);
    width: 120px;
    height: 40px;
    background-color: #333;
    border: 2px solid #333;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        color: #333;
    }
`;
export const RoomContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #8f8b8b;
    border-radius: 10px;
    padding: 30px 20px;
    box-shadow: 3px 3px 4px #666;
`;
export const RoomTitle = styled.div`
    width: 100%;
    height: 7%;
    color: #000;
    font-size: 20px;
    padding: 0 10px 0 35px;
    line-height: 2.2;
    font-weight: bold;
    background: url(../../assets/maximize.png) no-repeat left center;
    background-color: #fff;
    background-size: 30px 30px;
`;
export const ExitBtn = styled.button`
    position: absolute;
    top: 35px; right: 30px;
    width: 80px;
    height: 35px;
    background-color: #333;
    border: 2px solid #333;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        color: #333;
    }
`;
export const AddRoom = styled.div`
    width: 100%;
    height: 7%;
    color: #000;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 35px 0 10px;
    line-height: 2.2;
    font-weight: bold;
    background: url(../../assets/plus0.png) no-repeat right center;
    background-color: #fff;
    background-size: 50px 50px;
    cursor: pointer;
`;
import React from 'react';
import { Link } from 'react-router-dom';
import loadabel from '@loadable/component';

const RoomList = loadabel(() => import('@components/RoomList'));

import{
    ProfileWrap,
    Header,
    Logo,
    MainWrap,
    ModifyWrap,
    RoomWrap,
    ProfileImg,
    ImgDeleteBtn,
    ImgModifyBtn,
    UserName,
    NameEdit,
    UserDescript,
    DescriptEdit,
    SaveBtn,
    MicBtn,
    VolumeBtn,
    RoomContainer,
    RoomTitle,
    AddRoom,
    ExitBtn,
} from './style';

const Profile = () => {
    return(
        <ProfileWrap>
            <Header>
                <Link to="/">
                    <Logo>CodeHouse</Logo>
                </Link>
            </Header>
            <MainWrap>
                <ModifyWrap>
                    <ProfileImg src="../../assets/profileimg.png" />
                    <ImgDeleteBtn>이미지 제거</ImgDeleteBtn>
                    <ImgModifyBtn>이미지 수정</ImgModifyBtn>
                    <UserName>CodeMonkey</UserName>
                    <NameEdit src="../../assets/edit.png"/>
                    <UserDescript>Hello~ asjfdkla;sdfkjal;djl</UserDescript>
                    <DescriptEdit src="../../assets/edit.png"/>
                    <SaveBtn>프로필 저장</SaveBtn>
                    <MicBtn>음성 설정</MicBtn>
                    <VolumeBtn>소리 설정</VolumeBtn>
                </ModifyWrap>
                <RoomWrap>
                    <RoomContainer>
                        <RoomTitle>참여중인방(제목)</RoomTitle>
                        <ExitBtn>나가기</ExitBtn>
                        <AddRoom>Rooms</AddRoom>
                        <RoomList/>
                    </RoomContainer>
                </RoomWrap>
            </MainWrap>
        </ProfileWrap>
    );
}

export default Profile;
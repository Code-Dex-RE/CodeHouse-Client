import React from 'react';
import { Link } from 'react-router-dom';
import loadabel from '@loadable/component';

const RoomList = loadabel(() => import('@components/RoomList'));

import{
    ProfileWrap,
    Header,
    Logo,
    ModifyWrap,
    RoomWrap,
    ProfileImg,
    ImgDeleteBtn,
    ImgModifyBtn,
    UserName,
    UserDescript,
    SaveBtn,
    MicBtn,
    VolumeBtn,
} from './style';

const Profile = () => {
    return(
        <ProfileWrap>
            <Header>
                <Link to="/">
                    <Logo>CodeHouse</Logo>
                </Link>
            </Header>
            <ModifyWrap>
                <ProfileImg src="../../assets/profileimg.png" />
                <ImgDeleteBtn>이미지 제거</ImgDeleteBtn>
                <ImgModifyBtn>이미지 수정</ImgModifyBtn>
                <UserName></UserName>
                <UserDescript></UserDescript>
                <SaveBtn>프로필 저장</SaveBtn>
                <MicBtn>음성 설정</MicBtn>
                <VolumeBtn>소리 설정</VolumeBtn>
            </ModifyWrap>
            <RoomWrap>
                <RoomList>룸리스트 컴포넌트</RoomList>
            </RoomWrap>
        </ProfileWrap>
    );
}

export default Profile;
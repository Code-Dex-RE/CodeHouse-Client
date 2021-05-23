import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import loadabel from '@loadable/component';

import {
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
} from './styles';

const Profile = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  const triggerSelectFile = useCallback(() => {
    inputRef.current.click();
  }, []);

  return (
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
          <input type="file" accept="image/*" ref={inputRef} style={{ display: 'none' }} />
          <ImgModifyBtn onClick={triggerSelectFile}>이미지 수정</ImgModifyBtn>
          <UserName>CodeMonkey</UserName>
          <NameEdit src="../../assets/edit.png" />
          <UserDescript>Hello~ asjfdkla;sdfkjal;djl</UserDescript>
          <DescriptEdit src="../../assets/edit.png" />
          <SaveBtn>프로필 저장</SaveBtn>
          <MicBtn>음성 설정</MicBtn>
          <VolumeBtn>소리 설정</VolumeBtn>
        </ModifyWrap>
        <RoomWrap>
          <RoomContainer>
            <RoomTitle>참여중인방(제목)</RoomTitle>
            <ExitBtn>나가기</ExitBtn>
            <AddRoom>Rooms</AddRoom>
          </RoomContainer>
        </RoomWrap>
      </MainWrap>
    </ProfileWrap>
  );
};

export default Profile;

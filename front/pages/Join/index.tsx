import React from 'react';
import { Link } from 'react-router-dom';
import loadabel from '@loadable/component';

const RoomList = loadabel(() => import('@components/RoomList'));

import {
    JoinWrap,
    Header,
    Logo,
    Profile,
    RefreshBtn,
    RoomWrap,
    CreateBtn
} from './styles';

const Join = () => {
    return(
        <JoinWrap>
            <Header>
                <Link to="/">
                    <Logo>CodeHouse</Logo>
                </Link>
                <Profile>프로필</Profile>
            </Header>
            <RefreshBtn>Refresh</RefreshBtn>
            <RoomWrap>
                <RoomList>룸리스트 컴포넌트</RoomList>
            </RoomWrap>
            <CreateBtn>Create Room</CreateBtn>
        </JoinWrap>
    );
};

export default Join;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loadabel from '@loadable/component';

const RoomList = loadabel(() => import('@components/RoomList'));
const CreateRoom = loadabel(() => import('@components/CreateRoom'));

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
    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

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
            <CreateBtn onClick={ openModal }>Create Room</CreateBtn>
            <CreateRoom open={ modalOpen } close={ closeModal }></CreateRoom>
        </JoinWrap>
    );
};

export default Join;
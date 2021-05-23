import React, { useCallback, useState } from 'react';
import { Link, Redirect, Router, Switch } from 'react-router-dom';

import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

import { ReactComponent as LightIcon } from '@assets/sun.svg';
import { ReactComponent as DarkIcon } from '@assets/moon.svg';

import CreateRoom from '@components/CreateRoom';
import {
  CreateBtn,
  JoinBtn,
  Ends,
  Header,
  LeftMenu,
  LogoTitle,
  ThmemBtn,
  Main,
  MainContent,
  MainImg,
  MainTitle,
  RightMenu,
  HomeWrap,
  ProfileImg,
} from './styles';
import ProfileMenu from '@components/ProfileMenu';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [Id, setId] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.jwt}`;
  // const config = {
  //   headers: { Authorization: `Bearer ${cookies.jwt}` },
  // };

  const fetchUser = () => {
    return axios.get('/api/auth/me/jwt').then((res: AxiosResponse) => res.data);
  };
  const { data: userData } = useQuery(['uers', { status: true }], fetchUser, {
    onSuccess: (userData) => {
      setUserName(userData.name);
      setId(userData.id);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onClickProfile = useCallback(() => {
    setShowProfile((prev) => !prev);
  }, []);

  const onClickCreate = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  const toggleModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  // if (cookies.jwt === undefined) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <HomeWrap>
      <Header>
        <LeftMenu>
          <LogoTitle>
            <Link to="/">CodeHouse</Link>
          </LogoTitle>
        </LeftMenu>
        <RightMenu>
          {userData && (
            <span onClick={onClickProfile}>
              <ProfileImg src="../../assets/profileimg.png" />
              {showProfile && <ProfileMenu show={showProfile} onCloseModal={onClickProfile} />}
            </span>
          )}
          <ThmemBtn>
            <DarkIcon />
          </ThmemBtn>
        </RightMenu>
      </Header>

      <Main>
        {userName && <MainTitle>{userName} 님 반갑습니다!</MainTitle>}
        <MainTitle>다양한 개발자들과 소통해보세요!</MainTitle>
        <MainContent>
          코더하우스에서 다양한 개발자들과 소통하고 프로젝트도 Try 해보세요.
          <br /> 즐거운 개발스택을 쌓아보아요!
        </MainContent>
        <MainImg src="../../assets/mainImg.jpeg" />
        <Ends>
          <CreateBtn onClick={onClickCreate}>Create Room</CreateBtn>

          <Link to="/listroom">
            <JoinBtn>Join Room</JoinBtn>
          </Link>
        </Ends>
      </Main>
      {modalOpen ? <CreateRoom show={modalOpen} onCloseModal={toggleModal} id={Id}></CreateRoom> : null}
    </HomeWrap>
  );
};

export default Home;

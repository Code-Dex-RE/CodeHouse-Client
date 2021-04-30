import React, { useCallback, useState } from 'react';
import { Link, Redirect, Router, Switch } from 'react-router-dom';
import useUser from '@hooks/userHook';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import loadabel from '@loadable/component';
import { ReactComponent as LightIcon } from '@assets/sun.svg';
import { ReactComponent as DarkIcon } from '@assets/moon.svg';
import { useCookies, Cookies } from 'react-cookie';

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
  const [showProfile, setShowProfile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [cookies, setCookie] = useCookies(['jwt']);
  const config = {
    headers: { Authorization: `Bearer ${cookies.jwt}` },
  };

  const getUser = () => {
    return axios.get('/api/auth/me/jwt', config).then((res: AxiosResponse) => res.data);
  };
  const { data: userData, error } = useQuery(['uers', { status: true }], getUser);

  const onClickProfile = useCallback(() => {
    setShowProfile((prev) => !prev);
  }, []);

  const onClickCreate = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  const toggleModal = useCallback(() => {
    setModalOpen(false);
  }, []);
  console.log(userData);
  console.log('이거다', userData !== undefined);
  console.log(cookies.jwt);
  console.log('이거다2', cookies.jwt === undefined);
  if (cookies.jwt === undefined) {
    return <Redirect to="/login" />;
  }

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
            </span>
          )}
          {showProfile && <ProfileMenu show={showProfile} onCloseModal={onClickProfile} userName={userData.name} />}
          <ThmemBtn>
            <DarkIcon />
          </ThmemBtn>
        </RightMenu>
      </Header>

      <Main>
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
      {modalOpen ? <CreateRoom show={modalOpen} onCloseModal={toggleModal}></CreateRoom> : null}
    </HomeWrap>
  );
};

export default Home;

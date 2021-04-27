import React, { useCallback, useState } from 'react';
import { Link, Redirect, Router, Switch } from 'react-router-dom';
import useUser from '@hooks/userHook';

import loadabel from '@loadable/component';
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
  const { isLogIn, login, userData } = useUser();
  const [showProfile, setShowProfile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // setUserData(login);

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
  if (!isLogIn) {
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

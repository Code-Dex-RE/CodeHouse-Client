import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import loadabel from '@loadable/component';
import { ReactComponent as LightIcon } from '@assets/sun.svg';
import { ReactComponent as DarkIcon } from '@assets/moon.svg';

const CreateRoom = loadabel(() => import('@components/CreateRoom'));

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
} from './styles';

const Home = () => {
  const [ modalOpen, setModalOpen ] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  }
  const closeModal = () => {
      setModalOpen(false);
  }

  return (
    <>
      <HomeWrap>
        <Header>
          <LeftMenu>
            <LogoTitle>
              <Link to="/">CodeHouse</Link>
            </LogoTitle>
          </LeftMenu>
          <RightMenu>
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
              <CreateBtn onClick={ openModal }>Create Room</CreateBtn>
            <Link to="/join" role="button">
              <JoinBtn>Join Room</JoinBtn>
            </Link>
          </Ends>
        </Main>
      </HomeWrap>
      {modalOpen ? <CreateRoom open={ modalOpen } close={ closeModal }></CreateRoom> : null}
    </>
  );
};

export default Home;

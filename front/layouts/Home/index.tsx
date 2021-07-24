import React, { useCallback, useEffect, useState,useRef } from 'react';
import { Link, Redirect, Router, Switch } from 'react-router-dom';
import { QueryClient, useQuery, useQueryClient } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import gravatar from 'gravatar';
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
import { idText } from 'typescript';

export interface User {
  id: number;
  email: string;
  name: string;
}

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
// const queryClient = new QueryClient();

  
  const fetchUser = async () => {

     await new Promise (res=>setInterval(res,0))
     const {data}=await axios.get('/api/auth/me/jwt')
     return data;

 
  };
 
  
  const {data: userData,isLoading,error } = useQuery<User , ErrorConstructor>(
    ['users'],
    fetchUser,
    {

      retry: 0,
      // staleTime: 0,
    },

  );


  const onClickProfile = useCallback(() => {
    setShowProfile((prev) => !prev);
  }, []);

  const onClickCreate = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  const toggleModal = useCallback(() => {
    setModalOpen(false);
  }, []);
 
  // console.log('유저네임', userData.name);

  if (isLoading) {
    return <p></p>;
  }
  if (!userData) {
    return <Redirect to="/login" />;
  }
  if (error) return <p>Somethin wnt wrong...</p>;

   
  console.log('유저네임', userData?.name);
 
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
             <ProfileImg src={gravatar.url(userData.email,{s:'24px',d:'retro'})} alt={userData.name} title={userData.name}/>
              {showProfile && <ProfileMenu show={showProfile} onCloseModal={onClickProfile} />}
            </span>
          )}
          <ThmemBtn>
            <DarkIcon />
          </ThmemBtn>
        </RightMenu>
      </Header>

      <Main>
        {userData?.name && <MainTitle>{userData.name} 님 반갑습니다!</MainTitle>}
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
      {modalOpen ? <CreateRoom show={modalOpen} onCloseModal={toggleModal} id={userData?.id}></CreateRoom> : null}
    </HomeWrap>
  );
};

export default Home;

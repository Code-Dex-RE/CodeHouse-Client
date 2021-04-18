import React, { useCallback, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ReactComponent as LightIcon } from '@assets/sun.svg';
import { ReactComponent as DarkIcon } from '@assets/moon.svg';
import useUser from '@hooks/userHook';
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
  ProfileModal,
  ProfileImg,
} from './styles';
import ProfileMenu from '@components/ProfileMenu';

const Home = () => {
  const { isLogIn, login, userData } = useUser();
  const [showProfile, setShowProfile] = useState(false);

  // setUserData(login);

  const onClickProfile = useCallback(() => {
    setShowProfile((prev) => !prev);
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

          {showProfile && (
            <ProfileMenu style={{ right: 0, top: 38 }} show={showProfile} onCloseModal={onClickProfile}>
              <ProfileModal>
                <img src="../../assets/profileimg.png" alt={userData.name} />
                <div>
                  <span id="profile-name">{userData.name}</span>
                  <span id="proifle-proflie">
                    <img src="../../assets/user.svg" />
                    Profile
                  </span>

                  <span id="profile-active">
                    <img src="../../assets/log-out.svg" />
                    Logout
                  </span>
                </div>
              </ProfileModal>
            </ProfileMenu>
          )}

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
          <CreateBtn>Create Room</CreateBtn>
          <JoinBtn>Join Room</JoinBtn>
        </Ends>
      </Main>
    </HomeWrap>
  );
};

export default Home;

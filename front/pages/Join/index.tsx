import React, { useCallback, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import loadabel from '@loadable/component';
import RoomList from '@components/RoomList';
import CreateRoom from '@components/CreateRoom';
import { ReactComponent as LightIcon } from '@assets/sun.svg';
import { ReactComponent as DarkIcon } from '@assets/moon.svg';
import { JoinWrap, RefreshBtn, RoomWrap, CreateBtn } from './styles';
import { Header, LeftMenu, LogoTitle, ProfileImg, RightMenu, ThmemBtn } from '@layouts/Home/styles';
import ProfileMenu from '@components/ProfileMenu';
import useUser from '@hooks/userHook';

const Join = () => {
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
    <JoinWrap>
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
      <RefreshBtn>Refresh</RefreshBtn>
      <CreateBtn onClick={onClickCreate}>Create Room</CreateBtn>

      <RoomWrap></RoomWrap>
      {modalOpen ? <CreateRoom show={modalOpen} onCloseModal={toggleModal}></CreateRoom> : null}
    </JoinWrap>
  );
};

export default Join;

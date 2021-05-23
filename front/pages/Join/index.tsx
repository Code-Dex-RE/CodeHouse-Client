import React, { useCallback, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import loadabel from '@loadable/component';
import CreateRoom from '@components/CreateRoom';
// import SocketIOServer from 'so'
import { ReactComponent as LightIcon } from '@assets/sun.svg';
import { ReactComponent as DarkIcon } from '@assets/moon.svg';
import { JoinWrap, RefreshBtn, RoomWrap, CreateBtn } from './styles';
import { Header, LeftMenu, LogoTitle, ProfileImg, RightMenu, ThmemBtn } from '@layouts/Home/styles';
import ProfileMenu from '@components/ProfileMenu';
import useUser from '@hooks/userHook';
import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

const Join = () => {
  const [rooms, setRooms] = useState<any[]>([]);
  const [Id, setId] = useState(0);
  const [userName, setUserName] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [users, setUsers] = useState([]);

  // const fetchUsers = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //   setUsers(response.data);
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // setUserData(login);

  useEffect(() => {
    // e.preventDefault();
    axios.get('/api/chat/list').then((res) => {
      if (res.status === 200) {
        console.log(res.data.channelList);
        setRooms(res.data.channelList);
      }
    });
  }, []);

  const onJoinRoom = useCallback(() => {}, []);

  const onClickProfile = useCallback(() => {
    setShowProfile((prev) => !prev);
  }, []);

  const onClickCreate = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  const toggleModal = useCallback(() => {
    setModalOpen(false);
  }, []);

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

  // console.log(userData);
  // if (!isLogIn) {
  //   return <Redirect to="/login" />;
  // }

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
              {showProfile && <ProfileMenu show={showProfile} onCloseModal={onClickProfile} />}
            </span>
          )}
          <ThmemBtn>
            <DarkIcon />
          </ThmemBtn>
        </RightMenu>
      </Header>
      <RefreshBtn>Refresh</RefreshBtn>
      <CreateBtn onClick={onClickCreate}>Create Room</CreateBtn>

      <RoomWrap>
        <ul>
          {rooms.map((room) => (
            <Link key={room.id} to={`/room/${room.url}`}>
              <button>{room.name}</button>
            </Link>
          ))}
        </ul>
      </RoomWrap>
      {modalOpen ? <CreateRoom show={modalOpen} onCloseModal={toggleModal} id={Id}></CreateRoom> : null}
    </JoinWrap>
  );
};

export default Join;

import axios, { AxiosResponse } from 'axios';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

// interface Roomprops {
//   roomName: string;
//   roomDep: string;
//   roomUrl: string;
// }

const Room = () => {
  const [id, setID] = useState(0);
  const roomUrl = window.location.href.split('/');

  const socket = socketIOClient('http://localhost:3333/chat');

  const getUser = () => {
    return axios.get('/api/auth/me/jwt').then((res: AxiosResponse) => res.data);
  };
  const { data: userData } = useQuery(['uers', { status: true }], getUser, {
    onSuccess: (userData) => {
      console.log('userdata', userData.id);
      setID(userData.id);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  console.log('현재주소', roomUrl[4]);
  //   const getChannel = () => {
  //     return axios.get('/api/chat/list').then((res) => res.data.channelList);
  //   };

  //   const { data: channelData } = useQuery(['channels'], getChannel, {
  //     onSuccess: (channelData) => {
  //       console.log('channeldata', channelData);
  //     },
  //     onError: (error) => {
  //       console.log(error);
  //     },
  //   });

  useEffect(() => {
    socket.emit('join', roomUrl[4]);
    // socket.on('joinRoom',roomUesrID=>)
  }, []);

  return (
    <div>
      hi
      <hr />
      {/* <div>{NewRoom.roomName}</div>
      <div> {NewRoom.roomDep}</div>
      <div>{id}</div> */}
      <input type="text" />
      {/* <button onClick={onJoin}>join</button> */}
    </div>
  );
};

export default Room;

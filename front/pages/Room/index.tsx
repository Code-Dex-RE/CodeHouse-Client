import useInput from '@hooks/useInput';
import axios, { AxiosResponse } from 'axios';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

interface RoomProps {
  roomName: string;
  roomDep: string;
  roomUrl: string;
}
interface msg {
  roomUrl: string;
  msg: string;
  userName: string;
}

const Room = () => {
  const [id, setID] = useState(0);
  const [userName, setUserName] = useState('');
  const [messageText, onMessageText, setMesaageText] = useInput('');
  const roomUrl = window.location.href.split('/');
  const [findCh, setFindCh] = useState<any>({});
  const [channels, setChannels] = useState<RoomProps>({ roomName: '', roomDep: '', roomUrl: '' });
  const [messages, setMessages] = useState<any[]>([{ user: '', text: '' }]);

  const getUser = () => {
    return axios.get('/api/auth/me/jwt').then((res: AxiosResponse) => res.data);
  };
  const { data: userData } = useQuery(['uers', { status: true }], getUser, {
    onSuccess: (userData) => {
      setID(userData.id);
      setUserName(userData.name);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  // console.log('userdata', id);
  // console.log('userName', userName);
  // console.log('현재주소', roomUrl[4]);
  const getChannel = () => {
    return axios.get('/api/chat/list').then((res) => res.data.channelList);
  };

  const { data: channelData } = useQuery(['channels'], getChannel, {
    onSuccess: (channelData) => {
      console.log('channeldata', channelData);

      const findUrl = channelData.find((url: any) => url.url === roomUrl[4]);
      console.log('찾아라라라라라라', findUrl);
      setFindCh(findUrl);
      // setChannels({ roomName: findUrl.name, roomDep: findUrl.dep, roomUrl: findUrl.url });
      // console.log('이채널이다', channels);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  console.log('tt', findCh.name);

  // console.log(findCh.name);
  const onSubmit = useCallback(
    (e) => {
      const socket = socketIOClient('http://localhost:3333/chat');
      e.preventDefault();
      socket.emit('messageToServer', roomUrl[4], userName, messageText);
      setMesaageText('');
    },
    [userName, messageText],
  );

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3333/chat');

    return () => {
      socket.emit('join', findCh.name, findCh.dep, findCh.url, id); //chat gateway room:{newRoom,hostID}

      socket.on('messageToClient', (data: any) => {
        console.log('test1234', data[0]);
        setMessages((messages) => [...messages, { user: userName, text: messageText }]);
      });

      socket.on('joinRoom', (id: number) => {
        console.log('호우!', id);
      });
    };
    // socket.on('joinRoom',roomUesrID=>)
  }, []);
  // console.log('userName', userName);
  // console.log('messageText', messageText);
  // console.log('ff', msgPayload.msg);
  console.log('s', messages);

  return (
    <div>
      hi
      <hr />
      <div>
        <div>
          {messages.map(({ user, text }, i) => (
            <div key={i}>
              <span>{user} : </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onMessageText} value={messageText} />
        <button type="submit">전송</button>
      </form>
      {/* <button onClick={onJoin}>join</button> */}
    </div>
  );
};

export default Room;

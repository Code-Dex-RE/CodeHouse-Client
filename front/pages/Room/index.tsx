import useInput from '@hooks/useInput';
import axios, { AxiosResponse } from 'axios';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
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
  const [messages, setMessages] = useState<any[]>([{ user: '', text: '' }]);
  const [inRoom, setInRoom] = useState(true);
  // const socket = socketIOClient('http://localhost:3333/chat');
  const socketRef = useRef<any>();

  // if (socket) socket.emit('join', findCh.name, findCh.dep, findCh.url, id); //chat gateway room:{newRoom,hostID}

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
  // console.log('tt', findCh.name);

  // console.log(findCh.name);

  useEffect(() => {
    // const socket = socketIOClient('http://localhost:3333/chat');
    socketRef.current = socketIOClient('http://localhost:3333/chat');

    socketRef.current.on('msgToClient', (data: any) => {
      console.log('test1234', data[1]);

      setMessages((messages) => [...messages, { user: data[1], text: data[2] }]);
    });

    socketRef.current.on('joinRoom', (host_id: any) => {
      console.log('호우!', host_id);
    });
    // return () => {
    if (findCh !== null && id !== 0) {
      console.log('join room');
      socketRef.current.emit('join', findCh.name, findCh.dep, findCh.url, id);
      // }
    }

    return () => {
      socketRef.current.close();
    };
  }, [findCh, id]);

  const onSubmit = useCallback(
    (e) => {
      // const socket = socketIOClient('http://localhost:3333/chat');

      e.preventDefault();
      socketRef.current.emit('msgToServer', roomUrl[4], userName, messageText);
      setMesaageText('');
    },
    [userName, messageText],
  );

  // useEffect(() => {
  //   const socket = socketIOClient('http://localhost:3333/chat');

  //   socket.on('msgToClient', (data: any) => {
  //     console.log('test1234', data[1]);

  //     setMessages((messages) => [...messages, { user: data[1], text: data[2] }]);
  //   });

  //   socket.on('joinRoom', (id: number) => {
  //     console.log('호우!', id);
  //   });
  // });

  console.log('s', messages);

  // console.log('mm', messageText);

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

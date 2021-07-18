import useInput from '@hooks/useInput';
import axios, { AxiosResponse } from 'axios';
import { ChatBox, ChatContent, ChatList, ChatMainBox, ChatWrap, Head, Left, Right, RoomArea, SideList } from './styles';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import gravatar from 'gravatar';
import { useQuery } from 'react-query';
import socketIOClient from 'socket.io-client';
import useHistoryState from '@hooks/useHistroyState';
import { Link } from 'react-router-dom';
import SendSVG from '@assets/icons/SendSVG';
import ListSVG from '@assets/icons/ListSVG';

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
  const [userEmail,setUserEmail]=useState('');
  const [users,setUsers]=useState<any[]>([]);
  const [messageText, onMessageText, setMesaageText] = useInput('');
  const roomUrl = window.location.href.split('/');
  const [findCh, setFindCh] = useState<any>({});
  const [messages, setMessages] = useState<any[]>([]);
  const socketRef = useRef<any>();
  const scrollRef = useRef<any>(null);

  // if (socket) socket.emit('join', findCh.name, findCh.dep, findCh.url, id); //chat gateway room:{newRoom,hostID}

  const getUser = () => {
    return axios.get('/api/auth/me/jwt').then((res: AxiosResponse) => res.data);
  };
  const { data: userData } = useQuery(['uers'], getUser, {
    onSuccess: (userData) => {
      setID(userData.id);
      setUserName(userData.name);
      setUserEmail(userData.email);
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

    },
    onError: (error) => {
      console.log(error);
    },
  });
 
  console.log('ttfd', messages);

  const scrollToBottom =() =>{
    scrollRef.current.scrollIntoView({ behavior: "smooth" })
  }


  useEffect(() => {
    // const socket = socketIOClient('http://localhost:3333/chat');
    socketRef.current = socketIOClient('http://localhost:3333/chat');

    socketRef.current.on('msgToClient', (data: any) => {
      console.log('test1234', data[1]);

      setMessages((messages)=>[...messages,{userEmail:data[3],userName:data[1],text:data[2]}]);

      scrollToBottom();
    },[scrollToBottom]);

   
    if (findCh !== null && id !== 0 && userName !== '' && userName !== undefined) {
      console.log('join room');
      socketRef.current.emit('join', findCh.name, findCh.dep, findCh.url, id, userName,userEmail,findCh.id);

   
   
    //   socketRef.current.on('userDisconnect',(id:any)=>{
    //     console.log('ddd',id);
    //      setUsers((users)=>{
    //         console.log('dfdf',users)
    //         return  users.filter((user)=>user.socketID!== id)
    //       })
    // })

    }
    socketRef.current.on('joinRoom', (connectedUsers: any) => {
      console.log('호우!', connectedUsers);
      setUsers(connectedUsers)
    
    });

    return () => {
      socketRef.current.close();
    };
  }, [findCh, id, userName,userEmail]);

  // console.log('유저입니다', users);

  const onSubmit = useCallback(
    (e) => {
      // const socket = socketIOClient('http://localhost:3333/chat');

      e.preventDefault();
      socketRef.current.emit('msgToServer', roomUrl[4], userName, messageText,userEmail);
      setMesaageText('');
    },
    [userName, messageText,userEmail],
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

  // console.log('s', messages);

  // console.log('mm', messageText);


  return (
    <RoomArea>
      <Head>
        <Left>
          <Link to="/">
            <h1>CodeHouse</h1>
          </Link>
        </Left>
        <Right>
          <Link to="/listroom">
            <span>
              <ListSVG />
            </span>
          </Link>
        </Right>
      </Head>
      <ChatMainBox>
        <SideList>
          <div>Users</div>
            <hr />
            <ul>
              {
                users.map((user,i)=>(
                  <li key={user.userName+i}>
                    <img src={gravatar.url(user.userEmail,{ s: '15px', d: 'retro' })} alt={user.userName} />
                    <span>{user.userName}</span>
                  </li>

                ))
              }
            </ul>
        </SideList>
        <ChatWrap>
          <ChatContent>
            <ChatList>
   
              
              {messages.map( (msg,i) => (
            
         
            <div ref={scrollRef} key={msg.userName + i}>
            <img src={gravatar.url(msg.userEmail, { s: '35px', d: 'retro' })} alt={msg.userName} />

                  <div>
                    {msg.text &&
            <span style={{ fontWeight: 700 }}>{msg.userName} </span>}

                      <span>{msg.text}</span>
                  </div>
                </div>
                
             
              ))}
            
            </ChatList>
          </ChatContent>
          <ChatBox>
            <form onSubmit={onSubmit}>
              <input type="text" placeholder="Send a Message" onChange={onMessageText} value={messageText} />
              <button type="submit">
                <SendSVG />
              </button>
            </form>
          </ChatBox>
        </ChatWrap>
      </ChatMainBox>
    </RoomArea>
  );
};

export default Room;

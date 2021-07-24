import React, { useCallback, useEffect, useState,useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import loadabel from '@loadable/component';
import CreateRoom from '@components/CreateRoom';
import gravatar from 'gravatar';
import socketIOClient from 'socket.io-client';
import { ReactComponent as LightIcon } from '@assets/sun.svg';
import { ReactComponent as DarkIcon } from '@assets/moon.svg';
import { JoinWrap, RefreshBtn, RoomWrap, CreateBtn, ListsRoom, ContactRoom, ContactRoomWrap, LeftSide, RightSide, OnlineWrap, OfflineWrap } from './styles';
import { Header, LeftMenu, LogoTitle, ProfileImg, RightMenu, ThmemBtn } from '@layouts/Home/styles';
import ProfileMenu from '@components/ProfileMenu';
import useUser from '@hooks/userHook';
import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { off } from 'node:process';

const Join = () => {
  
  const [rooms, setRooms] = useState<any[]>([]);

  const [userlist,setUserList] = useState<any[]>([]);
  const [isOnline,setIsOnline] = useState<any[]>([]);
  
  const [isOffline,setIsOffline]=useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const socketRef = useRef<any>();


   
  const fetchUser = async () => {

    await new Promise (res=>setInterval(res,0))
    const {data}=await axios.get('/api/auth/me/jwt')
    return data;


 };
  const { data: userData ,isLoading,error} = useQuery(['uers'], fetchUser, {
    retry: 0,

  });

  useEffect(() => {
    // const len = userlist.length
    // console.log('how long',len)
    // e.preventDefault();
    axios.get('/api/chat/list').then((res) => {
      if (res.status === 200) {
        console.log(res.data.channelList);
        setRooms(res.data.channelList);
      }
    });

    axios.get('/api/user').then((res)=>{
      if(res.status===200){
        console.log(res.data)
        setUserList(res.data);
        
      }
    })
  

  }, []);

  useEffect(()=>{
    socketRef.current = socketIOClient.connect('http://localhost:3333/chat');
  
         console.log(`궁금해지네 ?${userData?.id} ${userData?.name}`)
    if(userData?.id&&userData?.name!==null&&userData?.id&&userData?.name!==undefined){
   
        socketRef.current.emit('onlineList',userData?.id,userData?.name );
        
      
        }


    socketRef.current.on('getOnline',(onlimember:any)=>{

      console.log('testtt',onlimember);
      
      setIsOnline(onlimember)

      // let len=data.onlinMembers.length;
    
    })
   
    // socketRef.current.on('userDisconnect',(id:any)=>{
    //     console.log('ddd',id);
    //       setIsOnline((isOnline)=>{
    //         console.log('dfdf',isOnline)
    //         return  isOnline.filter((user)=>user.socketID!== id)
    //       })
    // })

    

    return () => {
      socketRef.current?.off('getOnline')
      socketRef.current.close();
    };
  },[userData?.id,userData?.name,socketRef])


 

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



  // console.log(userData);
  // if (!isLogIn) {
  //   return <Redirect to="/login" />;
  // }
  if (isLoading) {
    return <p></p>;
  }

  if (error) return <p>Somethin wnt wrong...</p>;


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
             <ProfileImg src={gravatar.url(userData.email,{s:'24px',d:'retro'})} alt={userData.name} title={userData.name} />
              {showProfile && <ProfileMenu show={showProfile} onCloseModal={onClickProfile} />}
            </span>
          )}
          <ThmemBtn>
            <DarkIcon />
          </ThmemBtn>
        </RightMenu>
      </Header>
      

      <RoomWrap>
        <ListsRoom>
          <LeftSide>
            <span>People </span>
            <OnlineWrap>
              <span>ONLINE</span>
      
              <ul>
                
                {userlist.map((userOff)=>{
                  // const Online=isOnline.includes(userOff.id.toString());
                  const Online=isOnline.map(user=>(user.userID)).includes(userOff.id);


                  console.log('re',Online)
                 return (
                   
                  <li key={userOff.id} 
                  className={` ${
                    Online ? 'user--top--presence-online' : 'user--top--presence-offline'
                  }`}
                  >
   
                     <i >
                     <img src={gravatar.url(userOff.email,{s:'22px',d:'retro'})} alt={userOff.name} title={userOff.name}/> 
                     </i>
                   <span>            
                   {userOff.name} 
                   </span>
                  </li>
                )})

                }
              </ul>
           </OnlineWrap>

            <OfflineWrap>
            <span>OFFLINE</span>

              <ul>
                
                {userlist.map((userOff)=>{
                //  const users=isOnline.map(user=>(user.userID));
                  const Online=isOnline.map(user=>(user.userID)).includes(userOff.id);
                  console.log('re',Online)
                  
                 return (
                   
                  <li key={userOff.id}
                  className={` ${
                    Online ? 'user--bottom--presence-online' : 'user--bottom--presence-offline'
                  }`} 
                  >
                    <i>
                    <img src={gravatar.url(userOff.email,{s:'22px',d:'retro'})} alt={userOff.name} title={userOff.name}/>
                    </i>
                   <span>
                   {userOff.name} 
                   </span>
                  </li>
                )})

                }
              </ul>


              </OfflineWrap>
          </LeftSide>
          <ContactRoomWrap>
            <div>
            <span>Your feed</span>
      <button onClick={onClickCreate}>+ New Room</button>
            </div>
       
        <ul>
          {rooms.map((room) => (
          
            <ContactRoom key={room.id}>
            <Link to={`/room/${room.url}`}>
              <li>
               <span> {room.name}</span>
                <p>
                  {room.dep}
                </p>
                </li>
               
            </Link>
            </ContactRoom>

          
          ))}
        </ul>
        </ContactRoomWrap>

        <RightSide>
          <i><img src={gravatar.url(userData.email,{s:'60px',d:'retro'})} alt={userData.name}  /></i>
          <span>{userData.name}</span>
          <p>{userData.bio}</p>
          <div>
          <Link to="/profile" style={{ margin: 0 }}>
          <button>Edit Profile</button>
          </Link>
          </div>
        </RightSide>
        </ListsRoom>
      </RoomWrap>
      {modalOpen ? <CreateRoom show={modalOpen} onCloseModal={toggleModal} id={userData.id}></CreateRoom> : null}
    </JoinWrap>
  );
};

export default Join;

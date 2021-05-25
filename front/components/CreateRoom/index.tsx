import useInput from '@hooks/useInput';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import * as uuid from 'uuid';
import {
  CreateWrap,
  Modal,
  CloseBtn,
  Title,
  Form,
  Name,
  Descript,
  BtnWrap,
  CancelBtn,
  CreateBtn,
  Error,
} from './styles';

interface Props {
  show: boolean;
  onCloseModal: (e: any) => void;
  closeButton?: boolean;
  id?: number;
}

const CreateRoom: FC<Props & RouteComponentProps> = ({ show, closeButton, onCloseModal, id, history }) => {
  const socket = socketIOClient('http://localhost:3333/chat', { transports: ['websocket', 'polling'] });

  const [roomName, onChangeRoomName, setRoomname] = useInput('');
  const [roomDep, ondChangeRoomDep, setRoomDep] = useInput('');

  const roomID = uuid.v4();

  const NewRoom = {
    roomName: roomName,
    roomDep: roomDep,
    roomUrl: roomID,
  };

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (roomName !== '') {
        socket.emit('join', NewRoom, id);
        history.push({
          pathname: `/room/${roomID}`,
          // state: { roomName: roomName, roomDep: roomDep },
        });
      }
    },
    [roomName, roomDep],
  );

  if (!show) return null;

  return (
    <CreateWrap onClick={onCloseModal}>
      <Modal onClick={stopPropagation}>
        {closeButton && <CloseBtn type="button" onClick={onCloseModal} />}

        <Form onSubmit={onSubmit}>
          <Title>Create Your Room!</Title>
          <div style={{ marginBottom: 19 }}>
            <Name type="text" placeholder="Name" onChange={onChangeRoomName} value={roomName}></Name>
          </div>
          {!roomName && <Error>방이름을 입력해주세요</Error>}
          <div style={{ marginBottom: 19 }}>
            <Descript type="text" placeholder="Description" onChange={ondChangeRoomDep} value={roomDep}></Descript>
          </div>
          <BtnWrap>
            <CancelBtn type="button" onClick={onCloseModal}>
              Cancel
            </CancelBtn>
            <CreateBtn type="submit">Create</CreateBtn>
          </BtnWrap>
        </Form>
      </Modal>
    </CreateWrap>
  );
};
CreateRoom.defaultProps = {
  closeButton: true,
  id: 0,
};
export default withRouter(CreateRoom);

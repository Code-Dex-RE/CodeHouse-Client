import React, { FC, useCallback } from 'react';

import { CreateWrap, Modal, CloseBtn, Title, Form, Name, Descript, BtnWrap, CancelBtn, CreateBtn } from './styles copy';

interface Props {
  show: boolean;
  onCloseModal: (e: any) => void;
  closeButton?: boolean;
}

const CreateRoom: FC<Props> = ({ show, closeButton, onCloseModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <CreateWrap onClick={onCloseModal}>
      <Modal onClick={stopPropagation}>
        {closeButton && <CloseBtn type="button" onClick={onCloseModal} />}

        <Form>
          <Title>Create Your Room!</Title>
          <div style={{ marginBottom: 19 }}>
            <Name type="text" placeholder="Name"></Name>
          </div>
          <div style={{ marginBottom: 19 }}>
            <Descript type="text" placeholder="Description"></Descript>
          </div>
          <BtnWrap>
            <CancelBtn type="button" onClick={onCloseModal}>
              Cancel
            </CancelBtn>
            <CreateBtn>Create</CreateBtn>
          </BtnWrap>
        </Form>
      </Modal>
    </CreateWrap>
  );
};
CreateRoom.defaultProps = {
  closeButton: true,
};
export default CreateRoom;

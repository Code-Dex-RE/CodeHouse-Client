import React from 'react';

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
} from './CreateStyles';

interface CreateRoomProps {
    open : boolean,
    close : any,
}

const CreateRoom = ({ close }: CreateRoomProps ) => {
    return(
        <CreateWrap> 
            <Modal>
                <CloseBtn type="button" onClick={ close }></CloseBtn>
                <Title>Create Your Room!</Title>
                <Form>
                    <Name type="text" placeholder="Name"></Name>
                    <Descript type="text" placeholder="Description"></Descript>
                </Form>
                <BtnWrap>
                    <CancelBtn type="button" onClick={ close }>Cancel</CancelBtn>
                    <CreateBtn>Create</CreateBtn>
                </BtnWrap>
            </Modal>
        </CreateWrap>
    );
};

export default CreateRoom;

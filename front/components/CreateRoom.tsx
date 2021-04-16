import React from 'react';

import {
    Background,
    CreateWrap,
    CloseBtn,
    Title,
    Form,
    Name,
    Descript,
    BtnWrap,
    CancelBtn,
    CreateBtn,
} from './CreateStyles';

const CreateRoom = ({ open, close }) => {

    return(
        <div {open}>
            <Background></Background>
            <CreateWrap>
                <CloseBtn onClick={close}></CloseBtn>
                <Title>Create Your Room!</Title>
                <Form>
                    <Name type="text" placeholder="Name"></Name>
                    <Descript type="text" placeholder="Description"></Descript>
                </Form>
                <BtnWrap>
                    <CancelBtn>Cancel</CancelBtn>
                    <CreateBtn>Create</CreateBtn>
                </BtnWrap>
            </CreateWrap>
        </div>
    );
};

export default CreateRoom;
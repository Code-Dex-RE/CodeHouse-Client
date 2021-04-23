import styled from 'styled-components';

export const CreateMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
`;

export const ModalWrap = styled.div`
  width: 100%;
  max-width: 180px;
  position: absolute;
  right: 451px;
  top: 64px;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);

  & img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

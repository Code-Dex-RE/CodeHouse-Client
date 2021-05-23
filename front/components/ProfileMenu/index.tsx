import React, { FC, useCallback } from 'react';
import { ProfileIcon } from '../ProfileIcon';
import { CreateMenu, ModalWrap, ProfileWrap } from './styles';
import LogOutSVG from '@assets/icons/LogOutSVG';
import ProfileSVG from '@assets/icons/ProfileSVG';
import { Link } from 'react-router-dom';

interface Props {
  show: boolean;
  onCloseModal: (e: any) => void;
}
const ProfileMenu: FC<Props> = ({ show, onCloseModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <CreateMenu onClick={onCloseModal}>
      <ModalWrap onClick={stopPropagation}>
        <ProfileWrap>
          <Link to="/profile" style={{ margin: 0 }}>
            <ProfileIcon icon={<ProfileSVG />} label={'profile'} />
          </Link>
          <ProfileIcon icon={<LogOutSVG />} label={'Logout'} />
        </ProfileWrap>
      </ModalWrap>
    </CreateMenu>
  );
};
ProfileMenu.defaultProps = {};

export default ProfileMenu;

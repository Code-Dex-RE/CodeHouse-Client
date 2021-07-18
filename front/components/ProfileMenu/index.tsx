import React, { FC, useCallback } from 'react';
import { ProfileIcon } from '../ProfileIcon';
import { CreateMenu, ModalWrap, ProfileWrap } from './styles';
import axios from 'axios';
import LogOutSVG from '@assets/icons/LogOutSVG';
import ProfileSVG from '@assets/icons/ProfileSVG';

import { Link, Redirect, useHistory } from 'react-router-dom';

interface Props {
  show: boolean;
  onCloseModal: (e: any) => void;
}
const ProfileMenu: FC<Props> = ({ show, onCloseModal }) => {
  const history = useHistory();

  const config = {
    headers: { Authorization: '' },
  };
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onLogOut = useCallback(() => {
    axios
      .get('/api/auth/logout', config)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          console.log('logout');
          history.push('/login');
        }
      })
      .catch((error) => {
        console.dir(error);
      });
  }, []);

  if (!show) return null;

  return (
    <CreateMenu onClick={onCloseModal}>
      <ModalWrap onClick={stopPropagation}>
        <ProfileWrap>
          <Link to="/profile" style={{ margin: 0 }}>
            <ProfileIcon icon={<ProfileSVG />} label={'profile'} />
          </Link>
          <ProfileIcon onClick={onLogOut} icon={<LogOutSVG />} label={'Logout'} />
        </ProfileWrap>
      </ModalWrap>
    </CreateMenu>
  );
};
ProfileMenu.defaultProps = {};

export default ProfileMenu;

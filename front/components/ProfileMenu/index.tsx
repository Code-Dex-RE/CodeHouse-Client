import React, { CSSProperties, FC, useCallback } from 'react';
import { CreateMenu } from './styles';

interface Props {
  show: boolean;
  onCloseModal: (e: any) => void;
  style: CSSProperties;
}
const ProfileMenu: FC<Props> = ({ children, style, show, onCloseModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <CreateMenu onClick={onCloseModal}>
      <div style={style} onClick={stopPropagation}>
        {children}
      </div>
    </CreateMenu>
  );
};
ProfileMenu.defaultProps = {};

export default ProfileMenu;

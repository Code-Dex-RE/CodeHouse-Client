import React, { LegacyRef, ReactElement } from 'react';
import { Button } from './styles';

export interface ProfileIconProps {
  icon?: ReactElement;
  label?: string;
  transition?: boolean;
  onClick?: () => void;
}

export const ProfileIcon: React.FC<ProfileIconProps> = ({ icon, label, onClick }) => {
  return (
    <Button onClick={onClick}>
      {icon}
      <span>{label}</span>
    </Button>
  );
};

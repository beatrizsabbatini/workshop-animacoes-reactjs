import React from 'react';

import { Picture } from './styles';
import Me from '../../assets/profile-picture.jpeg';

export interface Props {
  size?: 'small' | 'medium' | 'big';
}

const ProfilePicture: React.FC<Props> = ({ size, ...props }) => {
  return (
    <Picture
      src={Me}
      alt="foto-beatriz"
      size={size}
      layoutId="profile-photo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      {...props}
    />
  );
};

export default ProfilePicture;

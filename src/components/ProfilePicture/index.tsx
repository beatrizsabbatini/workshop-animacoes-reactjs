import React from 'react';

import { Picture } from './styles';
import Me from '../../assets/profile-picture.jpeg';

export interface Props {
  size?: 'small' | 'medium' | 'big';
}

const ProfilePicture: React.FC<Props> = ({ size }) => {
  return <Picture src={Me} alt="foto-beatriz" size={size} />;
};

export default ProfilePicture;

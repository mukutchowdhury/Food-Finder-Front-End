import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styling/restStyle.css'

const ProfileIcon = () => {
  return (
    <div className="profile-icon">
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};

export default ProfileIcon;

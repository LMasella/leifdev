import React from 'react';
import './profile.css';
import leif from '../../img/Leif_Masella.png';

const Profile = () => {
  return (
    <div className="profile">
      <div className="image-container">
        <img src={leif} className="profile-picture" alt="Leif Masella" />
      </div>
      <h1>Leif Masella</h1>
      <h2 className="text-highlight">Full Stack Web Developer</h2>
    </div>
  )
}

export default Profile;
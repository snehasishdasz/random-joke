import React from 'react'
import "./Profile.css";
import userImage from "../user-image.jpg";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import {  FaTwitter } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const Profile = () => {
  // Content of the separate page
  return (
    
    <div className='cardss'>

    <div className="card">
      <div className="img-bx">
        <img src={userImage} alt="img" />
      </div>
      <div className="content">
        <div className="detail">
          <h2>
            Snehasish Das<br />
            <span>Web Developer</span>
          </h2>
          <ul className="sci">
            <li>
              <a href="https://github.com/snehasishdasz">
              <BsGithub />
              
              
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Snehasishdasz">
              {/* <FontAwesomeIcon icon={faLinkedIn} /> */}
              <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/snehasish-das/">
              {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
              <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/snehasishdasz/">
              {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
              <FaSquareInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
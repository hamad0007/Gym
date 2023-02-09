import React from 'react'
import './Footer.css'
import Githut from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
function Footer(){
const footer={
  padding: '1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    wordSpacing: '4rem',
    alignItems: 'center',
    justifycontent: 'center',
    height: '20rem'
}

  return (
    <div className='footer-container'>
      <hr />
      <div style={footer}>
        <div className='social-links'>
        <img src={Githut} alt="" />
        <img src={Instagram} alt="" />
        <img src={Linkedin} alt="" />
        </div>
      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
    </div>
    <div className="blur blur-f-1"></div>
    <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer

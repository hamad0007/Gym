import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import { letterSpacing } from '@mui/system'

let header={
display: 'flex',
justifyContent: 'space-between'
};
let headermenu = {
listStyle: 'none',
display: 'flex',
color: 'white',
};

let listyling={
marginLeft: '2rem',
cursor: 'pointer',
};

const Header =()=> {
  
  return (
    <div style={header}>
      <img src={Logo} alt="" className='logo' />
      <ul style={headermenu} className='header-menu'>
        <li style={listyling}>Home</li>
        <li style={listyling}>Programs</li>
        <li style={listyling}>Why us</li>
        <li style={listyling}>Plans</li>
        <li style={listyling}>Testimonials</li>
      </ul>
    </div>
  )
}

export default Header

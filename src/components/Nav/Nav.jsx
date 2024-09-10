import React from "react";
import MenuIcon from '../../assets/MenuIcon.svg?react'
import './Nav.css'

const Nav = () => {
  return (
    <div className="menu_icon_container">
      <div className="logo">MH</div>
      <MenuIcon className='menu_icon' />
    </div>
  );
};

export default Nav;

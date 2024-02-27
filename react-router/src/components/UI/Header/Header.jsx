import React from 'react'

import Img from "../../../assets/image/mcdonalds-logo.jpg";

import Menu from "../../Menu/Menu";

import "../Header/Header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
      <div className='parent'>
    <div className='header_left'>
     <img className='header_left_logo' src={Img} alt="mcdonalds_logo"  />
    </div>

    <Menu/>
     <div className='header_right'>
      <button className='header_right_btn'>İndi Sifariş edin</button>
     </div>
     </div>
     </div>
     </div>

  )
}

export default Header
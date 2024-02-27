import React from 'react'

import { Link } from 'react-router-dom'

import "../Menu/Menu.css"


const Menu = () => {
  return (
 <div>
       <div>
        <ul className='menu'>
             <li  className='menu_item'>
                <Link to='/meals' className='menu_item_link'>
                Menyumuz
                </Link>
            </li>
            <li className='menu_item'>
                <Link to='/about' className='menu_item_link'>
              Yeməklərimiz haqqında
            </Link>
            </li>
            <li  className='menu_item'>
                <Link to='/adress' className='menu_item_link'>
                Restoranların ünvanı
                </Link>
            </li>
           
        </ul>

       
    </div>

 </div>
  )
}

export default Menu
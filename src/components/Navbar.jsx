import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import { navLinks } from '../constants';
// import close from 'path/to/close.png';
// import menu from 'path/to/menu.png';

// import { navLinks } from '../constants/index';
import {   menu,  close } from '../assets'
import { rLogo } from '../assets';
// import {mMenu} from '../assets'


const Navbar = () => {
  const [active, setActive] = useState('');
  const[toggle, setToggle] = useState(false);
  return (
    <nav
      className = {`${styles.paddingX} w-full flex
      items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className = "w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to = "/"
          className = "flex items-center gap-2"
          onClick = {()=> {
            setActive("");
            window.scrollTo(0, 0)

          }}
        >
          <img src = {rLogo} alt = "logo" className = "w-9 h-9 object-contain rLogo-image" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Raiyan &nbsp; 
          <span className='sm:block hidden'> 
            Mahfuz Aulindo</span></p>

        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=> setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2
          min-2-[140px] z-10 rounded-x1`}>
            <ul className="list-none flex justify-end ites-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium text-[16px]`}
              onClick={()=> {
                setActive(link.title)
                setToggle(!toggle)
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

          </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar
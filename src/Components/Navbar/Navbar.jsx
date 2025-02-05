import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Arya.png'
import nav_underline from '../../assets/underline_theme.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const[menu,setMenu]=useState("home");
    const menuRef = useRef();
    
    const openMenu = () =>{
        menuRef.current.style.right="0";
    }
    const closeMenu = () =>{
        menuRef.current.style.right="-350px";
    }

    
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home'> <p onClick={()=>setMenu("home") }>Home</p ></AnchorLink>{menu==="home"? <img src={nav_underline} alt="" />:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={()=>setMenu("about") }>About Me</p></AnchorLink>{menu==="about"? <img src={nav_underline} alt="" />:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services") }>My Education</p></AnchorLink> {menu==="services"? <img src={nav_underline} alt="" />:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'> <p onClick={()=>setMenu("portfolio") }>My Latest Work</p></AnchorLink>{menu==="portfolio"? <img src={nav_underline} alt="" />:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#experience'> <p onClick={()=>setMenu("experience") }>Experience</p></AnchorLink>{menu==="experience"? <img src={nav_underline} alt="" />:<></> }</li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with Arya</AnchorLink></div>
    </div>
  )
}

export default Navbar
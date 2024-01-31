import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/a (1).png';
import { a } from 'react-scroll'
import { Link } from 'react-scroll'
import { MdEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [mobMenu,setMobMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo'/>
      <div className="menu">
        <Link className="menuitems" to='home' activeClass='active' spy='true' smooth='true' duration={500} offset={-100}>Home</Link>
        <Link className="menuitems" to='about' activeClass='active' spy='true' smooth='true' duration={500}>About</Link>
        <Link className="menuitems" to='skills' activeClass='active' spy='true' smooth='true' duration={500}>Skills</Link>
        <Link className="menuitems" to='portfolio' activeClass='active' spy='true' smooth='true' duration={500}>Portfolio</Link>
      </div>
      <Link to="contact" activeClass='active' smooth='true' spy='true' duration={500}><button className="menuBtn">
      <div className="contIcon"><MdEmail /></div>Contact Me
      </button></Link>
      <GiHamburgerMenu className='moblogo' onClick={()=>setMobMenu(!mobMenu)}/>
      <div className="mobmenu" style={{display:mobMenu ? 'flex' : 'none'}}>
        <Link className="mobmenuitems" to='home' activeClass='active' spy='true' smooth='true' duration={500} offset={-100} onClick={()=>setMobMenu(false)}>Home</Link>
        <Link className="mobmenuitems" to='about' activeClass='active' spy='true' smooth='true' duration={500} onClick={()=>setMobMenu(false)}>About</Link>
        <Link className="mobmenuitems" to='skills' activeClass='active' spy='true' smooth='true' duration={500} onClick={()=>setMobMenu(false)}>Skills</Link>
        <Link className="mobmenuitems" to='portfolio' activeClass='active' spy='true' smooth='true' duration={500} onClick={()=>setMobMenu(false)}>Portfolio</Link>
        <Link className="mobmenuitems" to='contact' activeClass='active' spy='true' smooth='true' duration={500} onClick={()=>setMobMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
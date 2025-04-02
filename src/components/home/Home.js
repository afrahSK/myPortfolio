import React from 'react'
import './home.css'
import { Link } from 'react-scroll'
// import img from '../../images/hello (1).png'
import Socials from './Socials'
const Home = () => {
  return (
    <header id='home'>
    <div className="container home">
      <h2 className="hello">HELLO,</h2>
      <h1 className="home-text-1">I'm Afrah Karatela.</h1>
      <h2 className="home-text-2">An aspiring Software Developer.</h2>
      <a href='#portfolio'><button className="home-btn">Portfolio</button></a>
      <Socials/>
    </div>
    </header>
  )
}

export default Home
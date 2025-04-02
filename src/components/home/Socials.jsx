import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import './home.css';
const Socials = () => {
  return (
    <div className="socials">
        <a href="https://www.linkedin.com/in/afrahkaratela/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com"><BsGithub/></a>
        <a href="https://twitter.com"><BsTwitterX/></a>
    </div>
  )
}

export default Socials
import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

export default function Footer() {
    return (
        <div>
                     {/* -------------All Rights Reserved Area---------------- */}
        <div className="rights"> 
            <p> created by &copy; <a href="https://react-icons.github.io/react-icons/">Rana Ahmed</a></p> 
            
            <div className="social-media">
                <p><a href="https://github.com/rana3399/Personal-To-Do-App-React/tree/master"> <BsGithub size={32}/> </a></p> 
                <p><a href="https://www.linkedin.com/in/rana-ahmed-rana/"><BsLinkedin size={32}/> </a></p>           
            </div>
        </div>
        </div>
    )
}

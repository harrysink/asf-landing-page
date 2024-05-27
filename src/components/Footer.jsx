import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faYoutube, faInstagram, faTiktok  } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/logo.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer relative w-full bottom-0 bg-yellow-200 h-[200px] p-8'>
        {/* above the dividing line */}
        <div className='flex items-center'>
            <div className='flex items-center justify-normal w-[20%]'>
                <img src={logo} />
            </div>
            <div className='w-[80%]'>
                <p className='font-semibold'>Contact</p>
                <p className='text-sm'>Email: impact@africastartupfactory.com</p>
            </div>
        </div>

        {/* dividing line */}
        <div className='mt-8 mb-6'><hr className='text-black' /></div>

        {/* copyright section below the dividing line */}
        <div className='flex items-center'>
            <p className='text-xs w-[60%]'>Copyright © 2024 Africa Startup Factory. All rights reserved</p>
            {/* social media icons */}
            <div className='w-[40%] flex justify-end'>
                <FontAwesomeIcon icon={faLinkedin} className='icons mr-2 cursor-pointer hover:text-amber-400 transition-ease-in-out duration-300'/>
                <FontAwesomeIcon icon={faYoutube} className='icons mr-2 cursor-pointer hover:text-amber-400 transition-ease-in-out duration-300'/>
                <FontAwesomeIcon icon={faInstagram} className='icons mr-2 cursor-pointer hover:text-amber-400 transition-ease-in-out duration-300'/>
                <FontAwesomeIcon icon={faTiktok} className='icons cursor-pointer hover:text-amber-400 transition-ease-in-out duration-300' />
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { Contactus } from './Contactus'
import { FaInstagram,FaLinkedin,FaGithub,FaRegCopyright} from "react-icons/fa";

export const Contact = () => {
  return (
    <div className='contact' id='Contact'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='text-center skill-top'>Get In Touch</h1>
          <p className='text-center mt-3'>Feel free to reach out for any inquiries or collaboration opportunities!</p>
          </div>
        </div>
      </div>
      <Contactus/>
      <footer className='footer mt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h1 className='fot-name text-center mt-3'>Gokulnath</h1>
              </div>
              <div className='d-flex justify-content-center gap-3 mt-3'>
              <FaInstagram className='fot-icon' />
              <FaLinkedin className='fot-icon' />
              <FaGithub className='fot-icon' />
              </div>
              <div>
             <p className='d-flex gap-2 justify-content-center mt-3'> <FaRegCopyright className='mt-1' />Copyright 2024. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

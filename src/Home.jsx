import React from 'react'
import image1 from './images/portfolio-1.jpg'
import { AutoType } from './AutoType'
import { About } from './About'
import { Skill } from './Skill'
import { Contact } from './Contact'
import { Project } from './Project'
import { FaInstagram,FaLinkedin,FaGithub,FaRegCopyright} from "react-icons/fa";

export const Home = () => {
  return (
    <div >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 order-2 order-md-1 mt-5">
             <img src={image1} alt="portfolio-image" className='img-fluid home-img ' />
          </div>
          <div className=" col-md-6 col-lg-6 order-1 order-md-2 mt-md-5 home-2">
            <h1 className='mt-5 ms-md-5 ms-lg-5'>Hello, I'm Gokulnath</h1>
             <AutoType/>
             <p className='ms-md-5 ms-lg-5 mt-3 home-p w-100' style={{textAlign:'justify'}}>Specialized in MERN Stack, I build dynamic, user-friendly web applications that look great and work flawlessly across all devices. Let's bring your vision to life with clean code and compelling design.</p>
             <div className='d-flex gap-1'>
           <a href="#Contact" className='anone'>  <button className='ms-md-5 ms-lg-5 mt-3  home1-btn'>Contact Me</button> </a>
             <div className='animate__animated animate__pulse animate__fast animate__infinite'><button className='ms-md-3 ms-lg-3 mt-3 home2-btn'>Hire Me</button></div>
             </div>
             <div className='d-flex gap-3 mt-4 ms-md-5 ms-lg-5 '>
                       <a href="https://www.instagram.com/itz_gokul_23_/">    <FaInstagram className='fot-icon' /> </a>
                        <a href="https://www.linkedin.com/in/gokulnath-n-1305b9341/">  <FaLinkedin className='fot-icon' />   </a>
                        <a href="https://github.com/gokul-vsi">   <FaGithub className='fot-icon' />  </a>
             </div>
          </div>
        </div>
      </div>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>

  )
}

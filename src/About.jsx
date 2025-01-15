import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import image2 from './images/portfolio-2.jpg'

export const About = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  })
  return (
    <div id='About' className='pt-1'>
      <div className="container mt-md-5 mt-lg-5 mt-xl-5 about-top">
        <div className="row">
          <div className="col-md-6 mt-5 " data-aos="zoom-in">
            <h1>About Me</h1>
            <p className=' mt-3 about-p' style={{textAlign:'justify'}}>I am an enthusiastic Full Stack Developer with a specialization in the MERN Stack. My expertise covers a range of frontend technologies including HTML, CSS (Bootstrap), JavaScript, and React.js, ensuring responsive and engaging user experiences. On the backend, I utilize Node.js, Express.js, and MongoDB to build efficient and scalable applications. Additionally, I am skilled in web designing using tools like Figma  to create visually appealing interfaces. I also offer services in MERN Stack web development  With a collaborative approach and strong communication skills, I am dedicated to delivering high-quality web solutions that meet diverse needs.</p>
            <button className='home1-btn mt-3 mb-md-4 mb-lg-4 mb-2'>DOWNLOAD CV</button>
            <hr />
            <div className='d-flex justify-content-between gap-1  mb-3'>
            <div className='education-box px-md-3 px-lg-3 px-1'>
              <h5 className=' mt-1 font-bolder mt-md-3 mt-lg-3'>Education</h5>
              <p className=' mt-1 clg-ins mt-md-3 mt-lg-3'>BCA , Indo American College - 2023</p>
            </div>
            <div className='education-box px-md-3 px-lg-3 px-1 '>
              <h5 className='font-bolder mt-1 mt-md-3 mt-lg-3'>Certification</h5>
              <p className='clg-ins mt-1 mt-md-3 mt-lg-3'>Full Stack Web Development and Designing , Web D School - 2024</p>
            </div>
            </div>
          </div>
          
          <div className="col-md-6">
           <img src={image2} alt="" className='img-fluid about-img ms-md-5 d-flex justify-content-center'  />
          </div>
        </div>
      </div>
    </div>
  )
}

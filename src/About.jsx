import React from 'react'
import image2 from './images/portfolio-2.jpg'

export const About = () => {
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-6 mt-5 ">
            <h1>About Me</h1>
            <p className=' mt-3 about-p'>I am an enthusiastic Full Stack Developer with a specialization in the MERN Stack. My expertise covers a range of frontend technologies including HTML, CSS (Bootstrap), JavaScript, and React.js, ensuring responsive and engaging user experiences. On the backend, I utilize Node.js, Express.js, and MongoDB to build efficient and scalable applications. Additionally, I am skilled in web designing using tools like Figma  to create visually appealing interfaces. I also offer services in MERN Stack web development  With a collaborative approach and strong communication skills, I am dedicated to delivering high-quality web solutions that meet diverse needs.</p>
            <button className='home1-btn mt-3 mb-md-4 mb-2'>DOWNLOAD CV</button>
            <hr />
          </div>
          <div className="col-md-6">
           <img src={image2} alt="" className='img-fluid about-img ms-md-5 d-flex justify-content-center'  />
          </div>
        </div>
      </div>
    </div>
  )
}

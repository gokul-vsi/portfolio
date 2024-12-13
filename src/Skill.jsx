import React from 'react'
import { MdVerified } from "react-icons/md";

export const Skill = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h1 className='h1 text-center mt-5 skill-top'>My Skills</h1>
          </div>
        </div>
      </div>
       <div className="container skill">
        <div className="row">
          <div className="col-md-6 col-lg-6">
             <div className="first-main d-flex justify-content-center align-item-center gap-5 ms-md-3">
             <div className="first-1 d-flex flex-column gap-2 sk-mon-1">
              <h5 className='sk-h'><MdVerified  className='verified' /> HTML</h5>
              <h5 className='sk-h'><MdVerified  className='verified' /> CSS</h5>
              <h5 className='sk-h'><MdVerified  className='verified' /> Javascript</h5>
              <h5 className='sk-h'><MdVerified  className='verified' /> Bootstrap</h5>
              <h5 className='sk-h'><MdVerified  className='verified' /> Tailwind CSS</h5>
             </div>
             <div className="first-2 d-flex flex-column gap-2">
             <h5 className='sk-h'><MdVerified  className='verified' /> React</h5>
             <h5 className='sk-h'><MdVerified  className='verified' /> Node.js</h5>
             <h5 className='sk-h'><MdVerified  className='verified' /> Express.js</h5>
             <h5 className='sk-h'><MdVerified  className='verified' /> MongoDB</h5>
             <h5 className='sk-h'><MdVerified  className='verified' /> JQuery</h5>
              </div>    
              </div>         
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="second-main d-flex justify-content-center align-item-center gap-5 ms-md-5 skill-mobile">
            <div className="second1 d-flex flex-column gap-2">
            <h5 className='sk-h'><MdVerified  className='verified' /> Figma</h5>
            <h5 className='sk-h'><MdVerified  className='verified' /> Wordpress</h5>
            <h5 className='sk-h'><MdVerified  className='verified' /> Firebase</h5>
            <h5 className='sk-h'><MdVerified  className='verified' /> AOS</h5>
            <h5 className='sk-h'><MdVerified  className='verified' /> Git</h5>
            </div>
            <div className="second2 d-flex flex-column gap-2 sk-mob">
            <h5 className='sk-h'><MdVerified  className='verified' /> Github</h5>
            <h5 className='sk-h'><MdVerified  className='verified' /> Django</h5>
            <h5 className='sk-h'><MdVerified  className='verified' /> Redux</h5>
            </div>
            </div>
            </div>
        </div>
       </div>
    </div>
  )
}

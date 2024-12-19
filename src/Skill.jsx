import React from 'react'
import { MdVerified } from "react-icons/md";
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'
import nodejs from './images/nodejs1.png'
import express from './images/express.png'
import mongo from './images/mongodb.png'
import firebase from './images/fireabase.png'
import redux from './images/redux.png'
import git from './images/git.png'
import figma from './images/figma.webp'

export const Skill = () => {
  return (
    <div id='Skill'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h1 className='h1 text-center mt-5 skill-top'>My Skills</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-md-5">
        <div className="row">
        <div className="col-md-3">
           <div className="className='w-50 h-100 skill-box">
             <img src={html} className='skill-width1 mx-auto d-block img-fluid' alt="" />
             <h5 className='text-center mt-3'>HTML</h5>
             <p className='text-center skill-p'>Building structured web content</p>
           </div>
          </div>
          <div className="col-md-3">
           <div className="className='w-50 h-100 skill-box">
             <img src={css} className='skill-width mx-auto d-block img-fluid mt-md-3' alt="" />
             <h5 className='text-center mt-3'>CSS</h5>
             <p className='text-center text-sm skill-p'>Styling and layout for modern web designs</p>
           </div>
          </div>
          <div className="col-md-3">
          <div className="className='w-50 h-100 skill-box">
             <img src={js} className='skill-width mx-auto  d-block img-fluid mt-md-3' alt="" />
             <h5 className='text-center mt-3'>Javascript</h5>
             <p className='text-center text-sm skill-p'>Building interactive and dynamic web applications</p>
           </div>
          </div>
          <div className="col-md-3">
          <div className="className='w-50 h-100 skill-box">
             <img src={react} className='skill-width mx-auto d-block img-fluid mt-md-3' alt="" />
             <h5 className='text-center mt-3'>React</h5>
             <p className='text-center text-sm skill-p'>Building interactive UIs with state management</p>
           </div>
          </div>
        </div>
      </div>
      <div className="container mb-md-5">
        <div className="row">
          <div className="col-md-3">
          <div className="className='w-50 h-100 skill-box">
             <img src={nodejs} className='skill-width mx-auto d-block img-fluid mt-md-3' alt="" />
             <h5 className='text-center mt-3'>Node.js</h5>
             <p className='text-center text-sm skill-p'>Building scalable server-side applications</p>
           </div>
          </div>
          <div className="col-md-3">
          <div className="className='w-50 h-100 skill-box">
             <img src={express} className='skill-width mx-auto d-block img-fluid mt-md-3' alt="" />
             <h5 className='text-center mt-3'>Express.js</h5>
             <p className='text-center text-sm skill-p'>Lightweight web framework for building robust APIs and applications.</p>
           </div>
          </div>
          <div className="col-md-3">
          <div className="className='w-50 h-100 skill-box">
             <img src={mongo} className='skill-width mx-auto d-block img-fluid mt-md-3' alt="" />
             <h5 className='text-center mt-3'>MongoDB</h5>
             <p className='text-center text-sm skill-p'>NoSQL database for storing and managing high-volume data efficiently.</p>
           </div>
          </div>
          <div className="col-md-3">
          <div className="className='w-50 h-100 skill-box">
             <img src={firebase} className='skill-width mx-auto d-block img-fluid mt-md-3' alt="" />
             <h5 className='text-center mt-3'>Firebase</h5>
             <p className='text-center text-sm skill-p'>Backend-as-a-Service for fast app development</p>
           </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
          <div className="className='w-50 h-100 skill-box">
             <img src={redux} className='skill-width mx-auto d-block img-fluid mt-md-3' alt="" />
             <h5 className='text-center mt-3'>Redux</h5>
             <p className='text-center text-sm skill-p'>State management for React applications</p>
           </div>
          </div>
          <div className="col-md-3">
          <div className="className='w-50 h-100 skill-box">
             <img src={git} className='skill-width mx-auto d-block img-fluid mt-md-3' alt="" />
             <h5 className='text-center mt-3'>Git</h5>
             <p className='text-center text-sm skill-p'>Version control for collaborative software development</p>
           </div>
          </div>
          <div className="col-md-3">
          <div className="className='w-50 h-100 skill-box">
             <img src={figma} className='skill-width mx-auto d-block img-fluid mt-md-3' alt="" />
             <h5 className='text-center mt-3'>Figma</h5>
             <p className='text-center text-sm skill-p'>Building interactive UIs with state management</p>
           </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}


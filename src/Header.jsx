import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="sticky-top navbar-expand-lg bg-body-tertiary">
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand animate__animated animate__fadeInDown" href="#"><h2>Portfolio</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0 text-center animate__animated animate__fadeInDown ">
        <li className="nav-item">
        <a class="nav-link active" aria-current="page" href="#Home">Home</a>
          {/* <Link className="nav-link  " aria-current="page" to='/'>HOME</Link> */}
        </li>
        <li className="nav-item">
        <a class="nav-link active" aria-current="page" href="#About">About</a>
          {/* <Link className="nav-link  " to='/about'>ABOUT</Link> */}
        </li>
        <li className="nav-item">
        <a class="nav-link active" aria-current="page" href="#Skill">Skill</a>
          {/* <Link className="nav-link  " to='/skill'>SKILL</Link> */}
        </li>
        <li className="nav-item">
        <a class="nav-link active" aria-current="page" href="#Project">Project</a>
          {/* <Link className="nav-link  " to='/project'>PROJECT</Link> */}
        </li>
        <li className="nav-item">
        <a class="nav-link active" aria-current="page" href="#Contact">Contact</a>
          {/* <Link className="nav-link  " to='/contact'>CONTACT</Link> */}
        </li>
      </ul>
      <form className="d-flex justify-content-center animate__animated animate__fadeInDown" role="search">
        <button className="nav-btn p-2 " type="submit">DOWNLOAD CV</button>
      </form>
    </div>
  </div>
</nav> 
    </div>
  )
}

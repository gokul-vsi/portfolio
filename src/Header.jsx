import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg bg-body-tertiary sticky-top">
  <div class="container">
    <a class="navbar-brand animate__animated animate__fadeInDown" href="#"><h2>Portfolio</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto me-auto mb-2 mb-lg-0 text-center animate__animated animate__fadeInDown ">
        <li class="nav-item">
          <Link class="nav-link  " aria-current="page" to='/'>HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  " to='/about'>ABOUT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  " to='/skill'>SKILL</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  " to='/project'>PROJECT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  " to='/contact'>CONTACT</Link>
        </li>
      </ul>
      <form class="d-flex justify-content-center animate__animated animate__fadeInDown" role="search">
        <button class="nav-btn p-2 " type="submit">DOWNLOAD CV</button>
      </form>
    </div>
  </div>
</nav> 
    </div>
  )
}

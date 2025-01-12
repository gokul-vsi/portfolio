import React from 'react';
import image1 from './images/project1.png'
import image2 from './images/project2.png'
import image3 from './images/project3.png'
import image4 from './images/project4.png'
import image5 from './images/project5.png'
import image6 from './images/project6.png'
import image7 from './images/project7.png'

export const Project = () => {
  return (
    <div id='Project'>
      <div className='text-center skill-top'>
        <h1 className='h1 skill-top mb-3'>Projects</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-3">
          <ul class="nav nav-pills mb-3 d-flex justify-content-center mt-3 gap-5" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All Projects</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-frontend" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Frontend</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-backend" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Backend</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-fullstack" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">FullStack</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-figma" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Figma</button>
  </li>
</ul>
          </div>
        </div>
      </div>
      <div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3 mb-3">
        <div class="card h-100" width =  {18+'rem'}>
  <img src={image1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title mb-3 mt-2 bolder ">School Website</h5>
    <p class="card-text mb-4" style={{textAlign:"justify"}}>I designed and developed a multi-page website for a school  in HTML and CSS</p>
    <div className='d-flex justify-content-between'>
    <a href=" https://gokul-vsi.github.io/school/" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>

  </div>
</div>
        </div>
        <div className="col-md-3 mb-3">
        <div class="card h-100" width =  {18+'rem'}>
  <img src={image5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title mt-1">Task Manager</h5>
    <p class="card-text mb-2 mt-3" style={{textAlign:"justify"}}> CRUD application with the MERN stack, integrating a responsive frontend backend and database management</p>
    <div className='d-flex justify-content-between mt-3'>
    <a href="https://webd-taskmanager.vercel.app/" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>
  </div>
</div>
        </div>
        <div className="col-md-3 mb-3">
        <div class="card h-100" width =  {18+'rem'}>
  <img src={image7} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title  mb-2 mt-4">QR code</h5>
    <p class="card-text mt-3 mb-4">Developed a backend QR code generation application using Node.js and Express</p>
    <div className='d-flex justify-content-between mb-2'>
    <a href="https://qr-code-1-qlzj.onrender.com" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>
  </div>
</div>
        </div>
        <div className="col-md-3 mb-3">
        <div class="card h-100" width =  {18+'rem'}>
  <img src={image4}  class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">E-commerce website</h5>
    <p class="card-text mt-3 mb-3 ">Implemented an Add-to-Cart functionality in a React.js application</p>
    <div className='d-flex justify-content-between mt-4'>
    <a href="https://skechers-ecommerce.vercel.app/" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>
  </div>
</div>
        </div>

      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-3 mb-3">
          <div class="card h-100" width =  {18+'rem'}>
  <img src={image2}  class="card-img-top" alt="..."/>
          <div class="card-body">
    <h5 class="card-title">Fresh Restaurant</h5>
    <p class="card-text mt-3 mb-3  " style={{textAlign:"justify"}}>I designed a Single page Webisite for Restaurant with Responsive with HTML CSS and Bootstrap</p>
    <div className='d-flex justify-content-between mt-4'>
    <a href="https://gokul-vsi.github.io/fresh-hotel/" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>
  </div>
  </div>
  
        </div>
        <div className="col-md-3 mb-3">
        <div class="card h-100" width =  {18+'rem'}>
        <img src={image3}  class="card-img-top" alt="..."/>
        <div class="card-body">
    <h5 class="card-title mt-3">Billing Software</h5>
    <p class="card-text mt-3 mb-3  " style={{textAlign:"justify"}}>Developed a billing software application using JavaScript, enabling efficient invoice generation</p>
    <div className='d-flex justify-content-between mt-4'>
    <a href="https://gokul-vsi.github.io/Billing-Software/" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>
  </div>
        </div>
        </div>
        <div className="col-md-3 mb-3">
        <div class="card h-100" width =  {18+'rem'}>
        <img src={image6}  class="card-img-top" alt="..."/>
        <div class="card-body">
    <h5 class="card-title">Coffee House</h5>
    <p class="card-text mt-3  " style={{textAlign:"justify"}}>Created a detailed and interactive coffee shop website design in Figma, emphasizing user-friendly interface</p>
    <div className='d-flex justify-content-between mt-4'>
    <a href="https://www.figma.com/proto/8MOnwogxC7Jd3gxVnwLIr1/gokul_2?node-id=1-2&p=f&t=A3ep06AGqZOh0wDY-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>
  </div>
        </div>
        </div>
      </div>
      
    </div>
  </div>
  <div class="tab-pane fade" id="pills-frontend" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
        <div class="card h-100" width =  {18+'rem'}>
  <img src={image4}  class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">E-commerce website</h5>
    <p class="card-text mt-3 mb-3 ">Implemented an Add-to-Cart functionality in a React.js application</p>
    <div className='d-flex justify-content-between mt-4'>
    <a href="https://skechers-ecommerce.vercel.app/" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>
  </div>
</div>
        </div>
        <div className="col-md-3">
        <div class="card h-100" width =  {18+'rem'}>
  <img src={image1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title mb-3 mt-2 bolder ">School Website</h5>
    <p class="card-text mb-4" style={{textAlign:"justify"}}>I designed and developed a multi-page website for a school  in HTML and CSS</p>
    <div className='d-flex justify-content-between'>
    <a href=" https://gokul-vsi.github.io/school/" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>

  </div>
</div>
        </div>
        <div className="col-md-3">
        <div class="card h-100" width =  {18+'rem'}>
  <img src={image2}  class="card-img-top" alt="..."/>
          <div class="card-body">
    <h5 class="card-title">Fresh Restaurant</h5>
    <p class="card-text mt-3 mb-3  " style={{textAlign:"justify"}}>I designed a Single page Webisite for Restaurant with Responsive with HTML CSS and Bootstrap</p>
    <div className='d-flex justify-content-between mt-4'>
    <a href="https://gokul-vsi.github.io/fresh-hotel/" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>
  </div>
  </div>
        </div>
        <div className="col-md-3">
        <div class="card h-100" width =  {18+'rem'}>
        <img src={image3}  class="card-img-top" alt="..."/>
        <div class="card-body">
    <h5 class="card-title mt-3">Billing Software</h5>
    <p class="card-text mt-3 mb-3  " style={{textAlign:"justify"}}>Developed a billing software application using JavaScript, enabling efficient invoice generation</p>
    <div className='d-flex justify-content-between mt-4'>
    <a href="https://gokul-vsi.github.io/Billing-Software/" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>
  </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="pills-backend" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
        <div class="card h-100" width =  {18+'rem'}>
  <img src={image7} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title  mb-2 mt-4">QR code</h5>
    <p class="card-text mt-3 mb-4">Developed a backend QR code generation application using Node.js and Express</p>
    <div className='d-flex justify-content-between mb-2'>
    <a href="https://qr-code-1-qlzj.onrender.com" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="pills-fullstack" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
   <div className="container">
    <div className="row">
      <div className="col-md-3">
      <div class="card h-100" width =  {18+'rem'}>
  <img src={image5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title mt-1">Task Manager</h5>
    <p class="card-text mb-2 mt-3" style={{textAlign:"justify"}}> CRUD application with the MERN stack, integrating a responsive frontend backend and database management</p>
    <div className='d-flex justify-content-between mt-3'>
    <a href="https://webd-taskmanager.vercel.app/" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>
  </div>
</div>
      </div>
    </div>
   </div>
  </div>
  <div class="tab-pane fade" id="pills-figma" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
        <div class="card h-100" width =  {18+'rem'}>
        <img src={image6}  class="card-img-top" alt="..."/>
        <div class="card-body">
    <h5 class="card-title">Coffee House</h5>
    <p class="card-text mt-3  " style={{textAlign:"justify"}}>Created a detailed and interactive coffee shop website design in Figma, emphasizing user-friendly interface</p>
    <div className='d-flex justify-content-between mt-4'>
    <a href="https://www.figma.com/proto/8MOnwogxC7Jd3gxVnwLIr1/gokul_2?node-id=1-2&p=f&t=A3ep06AGqZOh0wDY-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" className='card-link '>Live Demo</a>
    <a href="" className='card-link '>Github</a>
    </div>
  </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

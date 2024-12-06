import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import { Skill } from './Skill'
import { Project } from './Project'
import { Contact } from './Contact'
import { Header } from './Header'
import "./App.css"
function App() {
  

  return (
    <>
     <BrowserRouter>
      <Header/> 
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

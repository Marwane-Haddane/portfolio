import { useState } from 'react'

import './App.css'
import Home from './components/home/Home'
import Project from './components/project/Project'
import Hero from './components/hero/Hero'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'


function App() {

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Project></Project>
      <Contact></Contact>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App

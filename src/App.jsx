import { useState } from 'react'
// import "./node_modules/expo/AppEntry"
import './App.css'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Service from './components/Service.jsx'
import Footer from "./components/Footer";
// import { Home } from 'lucide-react'

function App() {


  return (
    <>
   
<Navbar/>
<Home/>
<Service/>
<About/>
<Footer/>
     
    </>
  )
}

export default App

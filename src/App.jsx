import { useState } from 'react'

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import './App.css'

function App() {
  return (
    <div className='w-full lg:w-[70%] xlg:w-[50%] m-auto '>
     <NavigationBar/>
     <Home/>
     <About/>
     <Skill/>
    </div>

  )
}

export default App

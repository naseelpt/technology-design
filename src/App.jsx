
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import About from './component/About'
import Discover from './component/Discover'
import Header from './component/Header'
import Home from './component/Home'
import Service from './component/Service'
import Teastimonials from './component/Teastimonials'
import Contactus from './component/Contactus'

function App() {
 

  return (
    <>
   
      <Home/>
      <About/>
      <Service/>
      <Teastimonials/>
      <Discover/>
      <Contactus/>




      {/* <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/testimonia' element={<Teastimonials/>}/>
        <Route path='/discover' element={<Discover/>}/>



      </Routes> */}
  
   

    
     
    </>
  )
}

export default App

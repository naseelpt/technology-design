import React from 'react'
import Header from './Header'
import img from '../assets/im1.png'
import im from '../assets/im2.png'
import i from '../assets/im3.png'
import { Element } from 'react-scroll'
function Home() {
  return (
    <Element Element name='/'>



   <div className='ba h-[110vh] pt-20'>

      <Header/>


      <div className='pt-32 flex flex-col items-center justify-center'>

        <h1 className='md:text-5xl text-4xl font-medium   text-white'>Your Trusted Partner</h1>

        <h1 className='text-4xl md:text-5xl font-medium  text-white mt-5'>in Technology</h1>

        <p className='text-white mt-10 '>Global delivery infused with a commitment to excellence and innovation,</p>

        <p className='text-white mt-3'>providing superior software solutions to drive your business growth.</p>

        <button className='bg-rose-400 w-40 h-10 text-white hover:transform hover:scale-105 duration-75 rounded-full mt-7'>DISCOVER MORE</button>

      </div>



      <div className=' md:grid-cols-3 md:flex p-5 items-center justify-center gap-10 mt-64 '>

        <div className='bg-white w-80 h-[250px] rounded-3xl  shadow'>
          
          <img src={img} alt="no image" className='w-32 ms-24 h-24' />
          <p className='font-light px-5 '>Designing a system for centralized patient database management and analysis while adhering to stringent internal AZ guidelines and international GAMP standards.</p>


        </div>



        <div className='bg-white w-80 h-[250px] rounded-3xl shadow'>
          
          <img src={im} alt="no image" className='w-32 h-24 ms-24' />
          <p className='font-light p-3'>Recognized as the Innovation of the Year in the Construction Industry in Sweden, the system is utilized daily by nearly half a million workers across 15,000 construction sites.</p>


        </div>



        <div className='bg-white w-80 h-[250px] rounded-3xl shadow'>
          
          <img src={i} alt="no image" className='w-32 h-24 ms-24' />
          <p className='font-light p-3'>Seven years of continuous support and development for the Video on Demand platform, working as an extended Viaplay team to consistently deliver new features and improvements.</p>


        </div>







      </div>


 


   </div>
    
    
    
    
    
    
    
    
    </Element>
  )
}

export default Home
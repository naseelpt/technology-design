import React, { useState } from 'react';
import log from '../assets/logo.png';
import { Menu } from 'lucide-react';
import { Link } from 'react-scroll';





function Header() {


    const [open, setopen] = useState(false)

    return (




        <div className='bg-white md:h-20 h-20 md:w-[1050px] w-[345px] md:ms-60 rounded-full md:gap-16 gap-52 flex items-center md:fixed shadow '>

            <div className=''>

                <img src={log} alt="no image" className='w-24' />


            </div>


            <div className='ms-64 gap-5 md:flex hidden '>



                <Link to='/'>   <h1 className='font-light text-xl'>Home</h1></Link>
                <Link to='/about'>  <h1 className='font-light text-xl'>About</h1></Link>
                <Link to='/service'>  <h1 className='font-light text-xl'>Service</h1></Link>
                <Link to='/textimonia'><h1 className='font-light text-xl'>Textimonials</h1></Link>
                <Link to='/discover'><h1 className='font-light text-xl'>Discover Plans</h1></Link>
                <Link to='/contact'><h1 className='font-light text-xl'>Contact</h1></Link>

            </div>



            <div className='flex  md:hidden'>
                <Menu onClick={() => setopen(!open)} />


                {open && <div >
                    <h1 className='font-light text-xl'>Home</h1>
                    <h1 className='font-light text-xl'>About</h1>
                    <h1 className='font-light text-xl'>Service</h1>
                    <h1 className='font-light text-xl'>Textimonials</h1>
                    <h1 className='font-light text-xl'>Discover Plans</h1>
                    <h1 className='font-light text-xl'>Contact</h1>
                </div>}

            </div>















        </div>









    )
}

export default Header
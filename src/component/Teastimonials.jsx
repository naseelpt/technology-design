import React from 'react'
import ico from '../assets/icon.png'
import { Element } from 'react-scroll'

function Teastimonials() {
    return (
        <Element name='/textimonia'>


            <div className='md:p-20 md:mt-10 mt-32'>

                <h1 className='text-3xl text-center '>What do they say?</h1>

                <p className='mt-5 font-light text-center'>Discover what our clients have to say about their experiences</p>

                <p className=' font-light text-center'>working with us and how we’ve helped drive their success.</p>



                <div className=' gap-6 md:grid-cols-3 grid-cols-1 md:flex items-center justify-center mt-14'>

                    <div className='bg-white md:w-[375px] h-[300px] shadow-2xl rounded-2xl p-2 '>

                        <img src={ico} alt="no image" className=' ms-32 w-28 h-24' />

                        <p className='font-light mt-5'>Working with Acatsmbh has been a game-changer for our business. Their team's dedication to understanding our needs and delivering a custom software solution exceeded our expectations.</p>

                        <p className='text-xl mt-6'>James Peterson</p>

                        <p className='text-red-600'>CTO</p>

                    </div>


                    <div className='bg-white md:w-[375px] h-[300px] shadow-2xl rounded-2xl p-2 '>

                        <img src={ico} alt="no image" className=' ms-32 w-28 h-24' />

                        <p className='font-light mt-5'>Acatsmbh demonstrated exceptional professionalism and technical expertise throughout the project. Their ability to transform complex ideas into seamless applications was truly impressive.</p>

                        <p className='text-xl mt-6'>Emma Johnson</p>

                        <p className='text-red-600'>Product Manager</p>

                    </div>




                    <div className='bg-white md:w-[375px] h-[300px] shadow-2xl rounded-2xl p-2'>

                        <img src={ico} alt="no image" className=' ms-32 w-28 h-24' />

                        <p className='font-light mt-5'>Working with Acatsmbh has been a game-changer for our business. Their team's dedication to understanding our needs and delivering a custom software solution exceeded our expectations.</p>

                        <p className='text-xl mt-6'>David Smith</p>

                        <p className='text-red-600'>Operation Manager</p>

                    </div>

                </div>



            </div>







        </Element>
    )
}

export default Teastimonials
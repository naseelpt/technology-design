import React from 'react'
import dev from '../assets/dev1.png'
import de from '../assets/dev2.png'
import d from '../assets/dev3.png'
import dq from '../assets/dev4.png'
import dqa from '../assets/dev5.png'
import { Element } from 'react-scroll'

function Service() {
    return (
        <Element name='/service'>





            <div className='bg md:p-28 mt-14'>


                <div className=' text-center text-black'>

                    <h1 className='text-4xl font-medium '> Services We Provide</h1>

                    <p className='mt-7'>Explore our tailored solutions designed to drive innovation, streamline</p>

                    <p className='mt-2'>processes, and elevate your business to the next level.</p>

                </div>



                <div className=' grid-cols-3   md:flex items-center justify-center md:gap-5  mt-16 p-2 '>

                    <div className='ba md:w-[385px] w-[350px] md:h-[290px] rounded-3xl pb-[20px] mt-4 hover:transform hover:scale-105 duration-75 '>

                        <div className='bg-white md:w-[375px] w-[345px] h-[280px] rounded-3xl flex items-center justify-center flex-col '>

                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/double-helix-3d-icon-download-in-png-blend-fbx-gltf-file-formats--abstract-shape-geometric-objects-vol-1-pack-design-development-icons-8625819.png" alt="no image" className='w-32 h-24' />

                            <p className='text-xl '>Custome Devolepment</p>

                            <p className=' font-light ms-5 '>We offer comprehensive solutions, including web and application development, mobile platforms (Android, iOS, cross-platform), and embedded&nbsp;systems.</p>



                        </div>



                    </div>




                    <div className='ba  md:w-[375px] w-[350px] h-[275px] rounded-3xl md:mt-5 mt-5 pb-[20px] hover:transform hover:scale-105 duration-75  '>

                        <div className='bg-white md:w-[365px] w-[345px]  h-[265px] rounded-3xl flex items-center justify-center flex-col  '>

                            <img src={dev} alt="no image" className='w-20 h-20' />

                            <p className='text-xl '>Custome Devolepment</p>

                            <p className=' font-light ms-5 '>We offer comprehensive solutions, including web and application development, mobile platforms (Android, iOS, cross-platform), and embedded&nbsp;systems.</p>



                        </div>



                    </div>






                    <div className='ba  md:w-[385px] w-[350px] md:h-[290px] rounded-3xl pb-[20px] mt-4 hover:transform hover:scale-105 duration-75 '>

                        <div className='bg-white md:w-[375px] w-[345px]  h-[280px] rounded-3xl flex items-center justify-center flex-col  '>

                            <img src={de} alt="no image" className='w-20 h-20' />

                            <p className='text-xl '>Custome Devolepment</p>

                            <p className=' font-light ms-5 '>We offer comprehensive solutions, including web and application development, mobile platforms (Android, iOS, cross-platform), and embedded&nbsp;systems.</p>



                        </div>



                    </div>




                </div>







                <div className=' md:grid-cols-3 grid-cols-1 md:flex items-center justify-center md:gap-5 p-2 mt-16'>

                    <div className='ba md:w-[385px] w-[350px] md:h-[290px] rounded-3xl pb-[20px] mt-4 hover:transform hover:scale-105 duration-75 '>

                        <div className='bg-white md:w-[375px]  w-[345px]  h-[280px] rounded-3xl flex items-center justify-center flex-col '>

                            <img src={d} alt="no image" className='w-28 h-20' />

                            <p className='text-xl '>Custome Devolepment</p>

                            <p className=' font-light ms-5 '>We offer comprehensive solutions, including web and application development, mobile platforms (Android, iOS, cross-platform), and embedded&nbsp;systems.</p>



                        </div>



                    </div>



                    <div className='ba md:w-[375px] w-[350px] md:h-[275px] rounded-3xl mt-5 pb-[20px] hover:transform hover:scale-105 duration-75  '>

                        <div className='bg-white md:w-[365px] w-[345px] h-[265px] rounded-3xl flex items-center justify-center flex-col '>

                            <img src={dq} alt="no image" className='w-20 h-20' />

                            <p className='text-xl '>Custome Devolepment</p>

                            <p className=' font-light ms-5 '>We offer comprehensive solutions, including web and application development, mobile platforms (Android, iOS, cross-platform), and embedded&nbsp;systems.</p>



                        </div>



                    </div>






                    <div className='ba md:w-[385px] w-[350px] md:h-[290px] rounded-3xl pb-[20px] mt-4 hover:transform hover:scale-105 duration-75  '>

                        <div className='bg-white md:w-[375px] w-[345px]  h-[280px] rounded-3xl flex items-center justify-center flex-col  '>

                            <img src={dqa} alt="no image" className='w-20 h-20' />

                            <p className='text-xl '>Custome Devolepment</p>

                            <p className=' font-light ms-5 '>We offer comprehensive solutions, including web and application development, mobile platforms (Android, iOS, cross-platform), and embedded&nbsp;systems.</p>



                        </div>



                    </div>




                </div>





            </div>





        </Element>
    )
}

export default Service
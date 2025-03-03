import React from 'react'

function Contactus() {
    return (
        <>


            <div className='bg-white h-[700px] md:p-24 md:mt-[50px] mt-[1050px]'>


                <h1 className='text-3xl text-center '>Talk To Us</h1>

                <p className='mt-5 font-light text-center'>Get in touch with our team to discuss your ideas, challenges, and</p>

                <p className=' font-light text-center'>goals—let’s turn your vision into reality together!</p>




                <div className='md:px-28 mt-20 md:flex'>

                    <div className='md:ms-10 ms-24'>
                        <h1 className='text-xl'>Keep in touch</h1>
                        <p className='font-light mt-5'>Leonardo-da-Vinci-Weg 7,</p>
                        <p className='font-light mt-1'>678583, mannarkkad, palakkad</p>
                        <p className='font-light mt-1'>+91 6235 639468</p>
                        <p className='font-light mt-1'>ptnaseel@gmail.com</p>
                    </div>


                    <div className='md:ms-52'>

                        <div className='md:flex md:gap-5 p-5'>

                            <div className='bg-gray-300 w-80 h-12 rounded-4xl mt-1 form-control'>
                                <input type="text" placeholder='full name' className='mt-2 ms-5 outline-hidden placeholder:text-black ' />
                            </div>

                            <div className='bg-gray-300 w-80 h-12 rounded-4xl mt-5 md:mt-1 form-control'>
                                <input type="text" placeholder='full name' className='mt-2 ms-5 outline-hidden  placeholder:text-black ' />
                            </div>



                        </div>



                        <div className=' p-5'>

                            <div className='bg-gray-300 w-full h-40 rounded-4xl form-control'>
                                <input type="text" placeholder='write your message' className='mt-2 ms-5 outline-hidden  placeholder:text-black ' />
                            </div>
                            
                            
                            </div>

                          <div className='p-5'>
                                <div className=' bg-violet-500 h-12 rounded-4xl  flex justify-center hover:bg-[#ff589e]'>
    
                                    <button className='text-white font-light '>SEND MESSAGE</button>
    
    
                                </div>
    
                          </div>





                    </div>






                </div>



            </div>






        </>
    )
}

export default Contactus
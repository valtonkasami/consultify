'use client'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faSwatchbook, faVideo, faLaptopFile, faMailForward, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
export default function Home() {
  const [see, setSee] = React.useState(false)

  const less = () => {
    if (see) {
      return 'Less'
    } else return 'More'
  }
  return (
    <div>
    <div className='yoo max-sm:mb-10 mt-[75px] flex flex-col items-center justify-center space-y-5'>
      
      
      <h1 className='max-sm:mt-10 text-white text-5xl font-bold text-center max-sm:text-4xl'>The<br className='hero:hidden'/> Marketing Agency</h1>
      <p className='text-white text-center text-xl w-[750px] max-hero:w-[500px] max-sm:w-[350px] font-medium'>We help brands grow on Social Media with a team of Graphic Designers, Video Editors, Professional Marketers and more!</p>
      
      <div className='space-x-3'>
      <a href='#services'><button className='text-white font-[550] bg-[#555555] hover:bg-[#444444] px-4 py-1 rounded-full text-xl'>Learn More</button></a>
      <a href='#contact'><button className='text-white font-[550] bg-red-600 hover:bg-red-700 px-4 py-1 rounded-full text-xl'>Join Now</button></a>
      </div>
    </div>
    <hr className='border-2 border-[#444444]'/>

    <div id='services' className='flex justify-center'>
    <div className='grid grid-cols-4 max-big:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 mt-10 mb-10 gap-x-10 gap-y-5'>

      <div className=' px-5 flex flex-col justify-center items-center rounded-[50px] border-2 hover:border-red-600 border-[#444444] h-[360px] w-[300px] bg-[#222222]'>
        <FontAwesomeIcon className='text-white h-[50px] text-[#999999]' icon={faPeopleGroup}/>
        <h1 className='text-[silver] text-3xl font-bold mt-2'>Marketing</h1>
        <p className='mt-2 text-[silver] text-xl text-center font-medium'>Our team will ensure the growth of your brand through professional marketing techniques and personalized ads across multiple social media platforms.</p>
      </div>

      <div className='px-5 flex flex-col justify-center items-center rounded-[50px] border-2 hover:border-red-600 border-[#444444] h-[360px] w-[300px] bg-[#222222]'>
        <FontAwesomeIcon className='text-white h-[50px] text-[#999999]' icon={faSwatchbook}/>
        <h1 className='text-[silver] text-3xl font-bold mt-2'>Graphic Design</h1>
        <p className='mt-2 text-[silver] text-xl text-center font-medium'>Our designers use creativity to produce visually stunning materials that not only capture attention but also resonate with your audience.</p>
      </div>

<div className='px-5 flex flex-col justify-center items-center rounded-[50px] border-2 hover:border-red-600 border-[#444444] h-[360px] w-[300px] bg-[#222222]'>
        <FontAwesomeIcon className='text-white h-[50px] text-[#999999]' icon={faVideo}/>
        <h1 className='text-[silver] text-3xl font-bold mt-2'>Video Editing</h1>
        <p className='mt-2 text-[silver] text-xl text-center font-medium'>Our video editors produce amazing content for our clients, using advanced motion graphics and typography we create any kinds of professional videos</p>
      </div>

<div className=' px-5 flex flex-col justify-center items-center rounded-[50px] border-2 hover:border-red-600 border-[#444444] h-[360px] w-[300px] bg-[#222222]'>
        <FontAwesomeIcon className='text-white h-[50px] text-[#999999]' icon={faLaptopFile}/>
        <h1 className='text-[silver] text-3xl font-bold mt-2'>Websites</h1>
        <p className='mt-2 text-[silver] text-xl text-center font-medium'>Although we're a social media agency, we also have a team of developers to make sure we create professional websites for our clients and brands.</p>
      </div>
    </div>
    </div>
    <hr id='about' className='border-2 border-[#444444] mb-10'/>

    <div className='max-big:px-[30px] max-sm:px-3 flex justify-center'>
    <div className='px-5 mb-10 flex flex-col items-center max-big:w-full w-[1300px] bg-[#222222] border-2 border-[#444444] hover:border-red-600 rounded-[30px]'>
    <h1 className='mb-1 text-[silver] font-bold mt-4 text-3xl max-sm:text-2xl'>Learn more about us</h1>
    <p className='text-center text-xl font-medium text-[#999999]'>At our esteemed social media agency, we take immense pride in the exceptional proficiency of our team of professionals, who consistently deliver unparalleled satisfaction to our clients. Our commitment to excellence is evident in our ability to not only meet but exceed the expectations of our clients.{ see && <span> With a specialized focus on harnessing the power of social media, our adept professionals craft professional-grade advertisements that resonate with audiences across various platforms. Through strategic graphic design and meticulous video editing, we elevate our clients' online presence, ensuring their messages are not only visually compelling but also effectively communicate their brand identity.

What sets us apart is our holistic approach to brand development. Beyond social media, we extend our expertise to web and application development, courtesy of a dedicated team of skilled developers. By building customized websites and applications tailored to our clients' unique needs, we provide them with a robust digital presence that stands out in the competitive landscape. This comprehensive strategy not only enhances brand visibility but also cultivates a seamless and engaging user experience. As a result, our clients not only gain new customers but also foster a lasting impression that sets them apart from other brands.

Our success is rooted in a client-centric philosophy that prioritizes collaboration, innovation, and a relentless pursuit of excellence. We understand that each client is unique, and our team takes the time to comprehend their specific goals and challenges. This personalized approach allows us to devise tailored strategies that yield tangible results. As we continue to evolve in tandem with the dynamic digital landscape, our social media agency remains steadfast in its dedication to empowering our clients with cutting-edge solutions, ensuring their success in the ever-evolving realm of online marketing and brand development.</span>}</p>
    <button onClick={() => setSee(!see)} className='text-white font-[550] bg-red-600 text-2xl px-5 py-2 rounded-full my-4 hover:bg-red-700'>See {less()}</button>
    </div>
    </div>
    <hr className='border-2 border-[#444444] mb-10'/>
    
    <div id='contact' className='flex justify-center items-center px-3 w-full'>
    <div className='mb-5 flex justify-center items-center flex-col bg-[#222222] w-fit py-5 px-5 rounded-[30px] border-2 border-[#444444] hover:border-red-600'>
    <h2 className='text-red-600 font-[550] text-xl'>CONTACT</h2>
    <h1 className='text-[silver] font-bold text-3xl max-sm:text-2xl text-center'>Feel free to contact us anytime!</h1>

    <div className='w-full grid grid-cols-3 gap-x-3 gap-y-3 mt-3 max-nn:grid-cols-2 max-one:grid-cols-1'>
    <a href='mailto:consultify.agency@gmail.com' target='blank'><div className='flex items-center bg-[#222222] hover:border-red-600 one:w-[300px] w-full px-2 py-2 border-2 border-[#444444] rounded-[15px]'>
                <div className='h-12 w-12 bg-[#333333] border-2 border-[#888888] flex items-center justify-center mr-3 rounded-full text-red-600'><FontAwesomeIcon className='text-2xl' icon={faMailForward}/></div>
                <div>
                <h1 className='font-bold text-red-600'>Email</h1>
                <p className='font-medium text-[silver]'>Click to email</p>
                </div>
            </div></a>

            <a href='https://www.instagram.com/consultify_agency/' target='blank'><div className='flex items-center bg-[#222222] w-full px-2 py-2 border-2 border-[#444444] hover:border-red-600 rounded-[15px]'>
                <div className='h-12 w-12 bg-[#333333] border-2 border-[#888888] flex items-center justify-center mr-3 rounded-full text-red-600'><FontAwesomeIcon className='text-3xl' icon={faInstagram}/></div>
                <div>
                <h1 className='font-bold dark:text-red-600'>Instagram</h1>
                <p className='font-medium dark:text-[silver]'>@consultify_agency</p>
                </div>
            </div></a>

            <a href='tel:+38971944449' target='blank'><div className='flex items-center bg-[#222222] w-full px-2 py-2 border-2 border-[#444444] hover:border-red-600 rounded-[15px]'>
                <div className='h-12 w-12 bg-[#333333] border-2 border-[#888888] flex items-center justify-center mr-3 rounded-full text-red-600'><div className='rounded-full flex items-center justify-center h-9 w-9 overflow-hidden'><FontAwesomeIcon className='text-[23px] h-[25px]' icon={faPhone}/></div></div>
                <div>
                <h1 className='font-bold dark:text-red-600'>Phone</h1>
                <p className='font-medium text-[silver]'>+38971944449</p>
                </div>
            </div></a>

            </div>
    </div>
    </div>

    <div className='flex justify-center mb-3'>
    <div className='py-4 px-5 bg-[#222222] rounded-full'>
      <p className='text-[#999999] font-[500]'>Copyright © 2023. All rights are reserved</p>
    </div>
    </div>
    </div>    
  )
}

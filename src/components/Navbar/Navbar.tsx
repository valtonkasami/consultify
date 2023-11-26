'use client'
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {

    const [menu, setMenu] = React.useState(false)
    
    const colSwitch = () => {
        if (menu) {
            return 'bg-red-600'
        } else return 'bg-[#333333]'
    }

    const colSwitch2 = () => {
        if (menu) {
            return 'text-white'
        } else return 'text-[silver]'
    }

  return (
    <div className='fixed bg-black top-0 z-[999] w-full border-b-2 border-[#444444] h-[75px] flex items-center pr-4 md:pr-8 pl-4 justify-between'>
        <a href='#' className='bg-red-600 hover:bg-red-700 px-2 py-1 rounded-full'>
            <h1 className='text-white font-bold text-3xl'>Consultify</h1>
        </a>
        <div className='max-hero:hidden flex space-x-5 text-[silver] '>
            <a href='#' className='hover:text-red-500 text-xl font-[550]'>Home</a>
            <a href='#services' className='hover:text-red-500 text-xl font-[550]'>Services</a>
            <a href='#about' className='hover:text-red-500 text-xl font-[550]'>About</a>
            <a href='#contact' className='hover:text-red-500 text-xl font-[550]'>Contact</a>
        </div>
        <button onClick={() => {setMenu(!menu)}} className={` hero:hidden h-10 w-10 ${colSwitch()} hover:bg-red-600 hover:text-white ${colSwitch2()} flex justify-center items-center rounded-full`}><FontAwesomeIcon className=" text-2xl" icon={faBars} /></button>
        {menu && <div className='hero:hidden z-[20] flex justify-center items-center rounded-[30px] h-[200px] w-[150px] bg-[#222222] fixed right-[10px] top-[85px] border-2 border-[#555555] hover:border-red-600'>
            <div className='text-[silver] flex flex-col space-y-4 text-center'>
            <a onClick={() => {setMenu(false)}} href='#' className='hover:text-red-500 text-xl font-[550]'>Home</a>
            <a onClick={() => {setMenu(false)}} href='#services' className='hover:text-red-500 text-xl font-[550]'>Services</a>
            <a onClick={() => {setMenu(false)}} href='#about' className='hover:text-red-500 text-xl font-[550]'>About</a>
            <a onClick={() => {setMenu(false)}} href='#contact' className='hover:text-red-500 text-xl font-[550]'>Contact</a>
            </div>
        </div>}
        {menu && <div onClick={() => setMenu(false)} className='z-[10] fixed w-[100vh] h-[100vh] top-0 right-0'>
            
            </div>}
    </div>
  )
}

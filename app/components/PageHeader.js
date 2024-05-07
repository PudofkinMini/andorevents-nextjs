import React from 'react'
import NavbarHome from './NavbarHome';
import Image from 'next/image';

export const PageHeader = () => {
  return (
    <div className="w-[100svw] pt-[2rem] bg-header overscroll-contain">
        <div className="py-[5rem] text-center justify-center">
            <span className="text-8xl p-4 font-bold border-white border-0 smd:border-[0.5rem] text-white">Andor Events</span>
            <div className="justify-center text-center flex flex-col smd:flex-row text-3xl text-white">
                <a href="mailto:andor4events@gmail.com" className="mx-auto pt-[5rem] hover:underline duration:200">andor4events@gmail.com</a>
                <a href="https://www.youtube.com/watch?v=YiOlaiscqDY" className="pt-[5rem] mx-auto hover:underline duration:200">+1 (416) 841-2004</a>
                
            </div>
        </div>
    </div>
      
  )
}

export default PageHeader;

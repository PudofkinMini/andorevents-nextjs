import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

function NavbarHome() {
  
  return (
    <div className="bg-slate-800 sticky top-0 w-full mx-auto z-[999]">
      <nav className="">
        <div className="">
          <div className="w-full pl-0 h-[12vh] text-3xl py-0 pb-0 max-h-full flex flex-row justify-between items-center">
            <a href="/" className="duration-100">
              <div className="border-4 border-white mx-5 p-2 font-bold text-white hover:scale-[1.05] active:scale-[0.95] duration-100">Andor Events</div>
            </a>
            <ul className="flex space-x-3 justify-content text-white font-bold items-center text-align-center p-0">
              <li className="hover:scale-[1.15] active:scale-[0.95] duration-200 font-dosis px-3 rounded-xl"><a href="https://www.youtube.com/watch?v=XN7E5tKM-no&list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf&index=2" className="">Wedding</a></li>
              <li className="hover:scale-[1.15] active:scale-[0.95] duration-200 font-dosis px-3 rounded-xl"><Link href='/events'>Events</Link></li>
              <li className="hover:scale-[1.15] active:scale-[0.95] duration-200 font-dosis px-3 rounded-xl"><a href="/decor" className="">Décor</a></li>
              <li className="hover:scale-[1.15] active:scale-[0.95] duration-200 font-dosis px-3 pr-10 rounded-xl"><a href="#" className="">Coordination</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarHome;






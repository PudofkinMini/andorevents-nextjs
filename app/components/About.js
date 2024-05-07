import React from 'react'

export const About = () => {
  return (
    <div className="flex flex-row bg-slate-900 text-white h-100 py-10 font-dosis text-center justify-center">
      <div className="flex-none w-1/2 p-[5rem]">
        <div className="text-5xl pb-10 font-bold text-yellow-400/80">
          Why choose Andor Events?
        </div>
        <div className="text-xl">
          The answer is simple. My mission is to <b>guarantee</b> the event of your dreams for a realistic price. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro, explicabo corporis iusto dicta, quisquam non ea enim vitae totam minus nesciunt cumque nam nisi excepturi dolores ad officia iste optio culpa? Quia voluptatibus, eos inventore laborum odio facere excepturi, ipsa deleniti, magni voluptatem velit iste id quae hic libero.
        </div>
        <div className="text-2xl py-7 duration-1000">
          Learn more about our events.
        </div>
        <a href='/events'>
          <button className="p-5 bg-white text-black active:scale-[0.95] duration-100 rounded-xl font-bold">Our Events</button>
        </a>
      </div>
        <div className="p-[5rem] mx-auto text-3xl">
          <div className="grid grid-cols-2 gap-4">
            <img className="active:animate-ping rounded-xl hover:grayscale duration-500 duration-100 w-[15rem]" src="/assets/images/Solid_red.png" alt="" />
            <div className="focus:scale-[1.8]">
              <img className="hover:scale-[1] focus:scale-[1.8] p-[1rem] border-5 rounded-5xl hover:grayscale duration-500 active:opacity-0 w-[15rem]" src="/assets/images/Solid_blue.png" alt="" />
            </div>
            <img className="hover:rotate-90 rounded-xl hover:grayscale duration-500 active:opacity-0 w-[15rem]" src="/assets/images/Green.png" alt="" />
            <img className="active:rotate-90 rounded-xl hover:grayscale duration-500 active:opacity-0 w-[15rem]" src="/assets/images/Solid_red.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default About;

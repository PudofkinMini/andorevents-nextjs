import React from 'react'
import PageHeader from '../components/PageHeader'
import NavbarHome from "../components/NavbarHome"


export const events = () => {
  return (
    <main className='overscroll-contain bg-slate-900'>
      <PageHeader></PageHeader>
      <NavbarHome></NavbarHome>
      <div className="text-white pt-16">
        <div className='text-5xl text-center justify-center flex pb-8 font-bold'>Our Events</div>
        <div className="grid grid-cols-4 gap-[1rem] text-center justify-center pt-[3rem]">
          <a href='#weddings'>
            <div className="text-center grid grid-cols-1 items-center hover:shadow-white hover:shadow-lg hover:scale-110 hover:-translate-y-[2rem] opacity-70 hover:opacity-100 duration-300 h-[45vh] w-[20vw] bg-weddingbutton bg-cover rounded-3xl mx-auto">
              <div className="font-bold text-4xl">Weddings</div>
            </div>
          </a>
          <a href="#anniversaries">
            <div className="text-center grid grid-cols-1 items-center hover:shadow-white hover:shadow-lg hover:scale-110 hover:-translate-y-[2rem] duration-300 h-[45vh] w-[20vw] bg-cover opacity-70 bg-anniversarybutton hover:opacity-100 duration-300 rounded-3xl mx-auto">
              <div className="font-bold text-4xl">Anniversaries</div>
            </div>
          </a>
          <a href="#birthdays">
            <div className="text-center grid grid-cols-1 items-center hover:shadow-white hover:shadow-lg hover:scale-110 hover:-translate-y-[2rem] duration-300 h-[45vh] w-[20vw] bg-cover opacity-70 bg-bdaybutton hover:opacity-100 duration-300 rounded-3xl mx-auto">
              <div className="font-bold text-4xl">Birthdays</div>
            </div>
          </a>
          <a href="#coorporate">
            <div className="text-center grid grid-cols-1 items-center hover:shadow-white hover:shadow-lg hover:scale-110 hover:-translate-y-[2rem] duration-300 h-[45vh] w-[20vw] bg-cover opacity-70 bg-coorporatebutton hover:opacity-100 duration-300 rounded-3xl mx-auto">
              <div className="font-bold text-4xl">Coorporate Events</div>
            </div>
          </a>
        </div>
        <div className="grid grid-cols-4 text-center justify-center py-8">
        </div>
        <div id='weddings'></div>
        <div className="border-t-[2rem] border-yellow-400/60 py-24 grid grid-cols-2">
          <div className='justify-center'>
            <div className="text-5xl text-yellow-400/80 font-bold mx-auto text-center justify-center">Weddings</div>
            <div className="text-lg text-left justify-center text-gray-200 py-8 mx-[3rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint asperiores similique amet, quis, quibusdam alias nihil sit explicabo hic blanditiis, quasi eos cumque deleniti vel? Rem, iusto temporibus. Quidem, excepturi? Repellendus delectus fuga iusto consequatur quae ab ipsam quidem laborum omnis pariatur eaque perferendis, architecto molestias expedita eos deserunt quis vitae commodi. Mollitia, voluptas ad sint asperiores hic necessitatibus ab omnis, et quos, nemo architecto quisquam? Perferendis non vitae dolor doloribus suscipit. Possimus itaque aut beatae obcaecati architecto, laboriosam tempore? Iste, quam amet quae pariatur molestias itaque soluta sit deserunt consectetur tempora est aperiam eius quidem. Dicta id nemo fuga.</div>
          </div>
          <div className="justify-center text-center text-5xl text-white">test</div>
        </div>
        <div id='anniversaries'></div>
        <div className="border-t-[2rem] border-yellow-400/60 py-24 grid grid-cols-2">
          <div className="justify-center text-center text-5xl text-white">test</div>
          <div className='justify-center'>
            <div className="text-5xl text-yellow-400/80 font-bold mx-auto text-center justify-center">Anniversaries</div>
            <div className="text-lg text-left justify-center text-gray-200 py-8 mx-[3rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint asperiores similique amet, quis, quibusdam alias nihil sit explicabo hic blanditiis, quasi eos cumque deleniti vel? Rem, iusto temporibus. Quidem, excepturi? Repellendus delectus fuga iusto consequatur quae ab ipsam quidem laborum omnis pariatur eaque perferendis, architecto molestias expedita eos deserunt quis vitae commodi. Mollitia, voluptas ad sint asperiores hic necessitatibus ab omnis, et quos, nemo architecto quisquam? Perferendis non vitae dolor doloribus suscipit. Possimus itaque aut beatae obcaecati architecto, laboriosam tempore? Iste, quam amet quae pariatur molestias itaque soluta sit deserunt consectetur tempora est aperiam eius quidem. Dicta id nemo fuga.</div>
          </div>
        </div>
        <div id='birthdays'></div>
        <div className="border-t-[2rem] border-yellow-400/60 py-24 grid grid-cols-2">
          <div className='justify-center'>
            <div className="text-5xl text-yellow-400/80 font-bold mx-auto text-center justify-center">Birthdays</div>
            <div className="text-lg text-left justify-center text-gray-200 py-8 mx-[3rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint asperiores similique amet, quis, quibusdam alias nihil sit explicabo hic blanditiis, quasi eos cumque deleniti vel? Rem, iusto temporibus. Quidem, excepturi? Repellendus delectus fuga iusto consequatur quae ab ipsam quidem laborum omnis pariatur eaque perferendis, architecto molestias expedita eos deserunt quis vitae commodi. Mollitia, voluptas ad sint asperiores hic necessitatibus ab omnis, et quos, nemo architecto quisquam? Perferendis non vitae dolor doloribus suscipit. Possimus itaque aut beatae obcaecati architecto, laboriosam tempore? Iste, quam amet quae pariatur molestias itaque soluta sit deserunt consectetur tempora est aperiam eius quidem. Dicta id nemo fuga.</div>
          </div>
          <div className="justify-center text-center text-5xl text-white">test</div>
        </div>
        <div id='coorporate'></div>
        <div className="border-t-[2rem] border-yellow-400/60 py-24 grid grid-cols-2">
          <div className="justify-center text-center text-5xl text-white">test</div>
          <div className='justify-center'>
            <div className="text-5xl text-yellow-400/80 font-bold mx-auto text-center justify-center">Coorporate Events</div>
            <div className="text-lg text-left justify-center text-gray-200 py-8 mx-[3rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint asperiores similique amet, quis, quibusdam alias nihil sit explicabo hic blanditiis, quasi eos cumque deleniti vel? Rem, iusto temporibus. Quidem, excepturi? Repellendus delectus fuga iusto consequatur quae ab ipsam quidem laborum omnis pariatur eaque perferendis, architecto molestias expedita eos deserunt quis vitae commodi. Mollitia, voluptas ad sint asperiores hic necessitatibus ab omnis, et quos, nemo architecto quisquam? Perferendis non vitae dolor doloribus suscipit. Possimus itaque aut beatae obcaecati architecto, laboriosam tempore? Iste, quam amet quae pariatur molestias itaque soluta sit deserunt consectetur tempora est aperiam eius quidem. Dicta id nemo fuga.</div>
          </div>
        </div>
      </div>
      
    </main>
  )
}

export default events;
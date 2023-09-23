import React from 'react'
import NavbarHome from '../components/NavbarHome'
import PageHeader from '../components/PageHeader'

export const decor = () => {
  return (
    <div className="bg-slate-900 text-white">
      <PageHeader></PageHeader>
      <NavbarHome></NavbarHome>
      <div className="text-8xl flex flex-col text-center font-bold pt-10">
        <div className="">Décor</div>
      </div>
    </div>
  )
}

export default decor
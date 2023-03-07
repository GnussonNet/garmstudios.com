import React from 'react'
import codic from '../assets/codic.png'
import drikk from '../assets/drikk.png'
import elon from '../assets/elon.png'
import fs from '../assets/fs.png'
import gomo from '../assets/gomo.png'
import obstecare from '../assets/obstecare.png'
import sws from '../assets/sws.png'
import vv from '../assets/vv.png'

const TrustView = () => {
  return (
    <div>
      <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center">
          <h1 className="text-lg font-medium leading-6 text-garm-blue-100 uppercase within 500 fortune companies">
            Trusted by well-known companies
          </h1>
        </div>
        <div className="grid gap-6 md:gap-12 grid-cols-auto-fit-16 max-w-4xl mx-auto pt-6">
          <div className="hover:scale-110 transition hover:saturate-0 cursor-pointer">
            <img className="max-h-16" src={codic} alt="logo" />
          </div>
          <div className="hover:scale-110 transition hover:saturate-0 cursor-pointer">
            <img className="max-h-16" src={drikk} alt="logo" />
          </div>
          <div className="hover:scale-110 transition hover:saturate-0 cursor-pointer">
            <img className="max-h-16" src={elon} alt="logo" />
          </div>
          <div className="hover:scale-110 transition hover:saturate-0 cursor-pointer">
            <img className="max-h-16" src={fs} alt="logo" />
          </div>
          <div className="hover:scale-110 transition hover:saturate-0 cursor-pointer">
            <img className="max-h-16" src={gomo} alt="logo" />
          </div>
          <div className="hover:scale-110 transition hover:saturate-0 cursor-pointer">
            <img className="max-h-16" src={obstecare} alt="logo" />
          </div>
          <div className="hover:scale-110 transition hover:saturate-0 cursor-pointer">
            <img className="max-h-16" src={sws} alt="logo" />
          </div>
          <div className="hover:scale-110 transition hover:saturate-0 cursor-pointer">
            <img className="max-h-16" src={vv} alt="logo" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default TrustView
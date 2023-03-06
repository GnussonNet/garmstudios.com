import { Briefcase } from 'lucide-react'
import React from 'react'

const CallToActionView = () => {
  return (
    <div className="py-20 md:py-24 mt-20 md:mt-40 flex items-center relative isolate after:content-[''] after:bg-gradient-to-l after:from-garm-blue-600 after:to-garm-blue-800 after:-skew-y-3 after:-z-10 after:absolute after:inset-0">
      <div className="flex max-w-screen-xl flex-col gap-8 justify-center items-center w-full mx-auto md:flex-row px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="w-full md:text-4xl text-2xl font-bold">Want to check out more of our work?</h1>
          <p className="text-garm-blue-100">Navigate to /portfolio to see even more projects.</p>
        </div>
        <div className="w-full">
          <button
            className="ml-auto w-full md:w-auto flex gap-4 justify-center items-center rounded-md bg-garm-gold-700 px-6 py-3 text-md font-medium text-black transition hover:bg-garm-gold-500 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
          >
            <Briefcase className="w-5 h-5" />
            <p>
              See our previous projects
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CallToActionView
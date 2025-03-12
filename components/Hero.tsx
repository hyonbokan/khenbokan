"use client";

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36' id='hero'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28  h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] 
          flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest 
            text-xs text-center text-white-100 max-w-80'>
            Welcome to My Portfolio!
          </h2>

          <TextGenerateEffect
            className='text-center text-5xl md:text-6xl lg:text-7xl'
            words="My name is Khen Bo"
          />

          <p className='text-center text-white-100 md:tracking-wider
            mb-4 text-lg md:text-xl lg:text-2xl'>
            Software engineer with experience in AI-powered automation, scalable microservices, and distributed systems, building efficient and high-performance applications.
          </p>
          <a href='#projects'>
            <MagicButton
              title='Show my work'
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
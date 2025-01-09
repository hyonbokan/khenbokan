import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='w-full absolute left-0 -bottom72 min-h-96'>
            <img 
                src='/footer-grid.svg'
                alt='grid'
                className='w-full h-full opacity-70'
            />
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Do you want to <span className='text-purple'>reach out</span>?
            </h1>
            {/* <p className='text-white-200 md:mt-10 my-5 text-center'> Description text</p> */}
            <a href='mailto:hyonbokan@gmail.com'>
                <MagicButton 
                    title="Contact via email"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>

        <div className='flex mt-16 md:flow-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Khen Bo Kan</p>
        </div>

        <div className='flex justify-center items-center md:gap-3 gap-6'>
            {socialMedia.map((profile) => (
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                    <a href={profile.link} target="_blank" rel="noopener noreferrer">
                        <img src={profile.img} alt={profile.id.toString()} width={20} height={20} />
                    </a>
                </div>
            ))}
        </div>
    </footer>
  )
}

export default Footer
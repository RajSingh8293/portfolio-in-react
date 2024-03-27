import React from 'react'
import './Hero.css'
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagramAlt,
} from 'react-icons/bi'

const HeroContent = ({ heading, heading_2, content, span }) => {
  return (
    <div className=" content lg:order-1 px-10 sm:px-10 sm:mb-5">
      <div>
        <h2 className="anim  lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-bold">
          {heading}
          <span className="text-green-400 ">{span}</span>{' '}
        </h2>
        <h1 className="anim  lg:text-5xl md:text-5xl sm:text-4xl text-3xl my-4 font-bold">
          {heading_2}
        </h1>
        <p className="anim  text-md  ">{content}</p>
      </div>

      <div className=" mdMedia lg:pt-8 md:pt-8 sm:pt-5 pt-5  flex lg:gap-10 md:gap-8  items-center">
        <div className="social-media flex gap-2">
          <button className="anim btn border-green-400 border-2  px-2 rounded-full p-2">
            <BiLogoFacebook className="text-xl text-green-400" />
          </button>
          <button className="anim btn border-green-400 border-2  px-2 rounded-full p-2">
            <BiLogoTwitter className="text-xl text-green-400" />
          </button>
          <button className="anim btn border-green-400 border-2  px-2 rounded-full p-2">
            <BiLogoLinkedin className="text-xl text-green-400" />
          </button>
          <button className="anim btn border-green-400 border-2  px-2 rounded-full p-2">
            <BiLogoInstagramAlt className="text-xl text-green-400" />
          </button>
        </div>

        <div className='contact-me'>
          <button className="anim btn contact-btn bg-green-400 px-10 py-2 rounded">
            Contact me
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroContent

import React from 'react'

import HeroContent from './HeroContent'

const Hero = ({ heading, heading_2, content, span, image }) => {
  return (
    <>
      <div className="hero flex items-center h-[100vh] lg:justify-between text-white pt-32 mb-16 md:mb-5 md:pt-24  lg:px-10 md:px-10">
        <HeroContent
          heading={heading}
          heading_2={heading_2}
          content={content}
          span={span}
        />

        <div className="hero-img anim lg:order-2 flex items-center justify-center">
          <img className="h-46" src={image} alt="profile-image" />
        </div>
      </div>
    </>
  )
}

export default Hero

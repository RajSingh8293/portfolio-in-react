import React, { useState } from 'react'
import './AboutStyle.css'
import OthersHero from '../../OthersHero/OthersHero'
import HomeAbout from '../home/HomeAbout/HomeAbout'
import aboutImg from '../../../assets/rajprofilepic.png'
import image from '../../../Images/services_img.jpg'

const About = () => {
  return (
    <section className="">
      <div>
        <OthersHero title="About" hash="#" image={image} />
        <HomeAbout img={aboutImg} />
      </div>
    </section>
  )
}

export default About

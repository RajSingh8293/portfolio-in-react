import React from 'react'
import OthersHero from '../../components/OthersHero/OthersHero'
import image from '../../Images/services_img.jpg'
import './AboutStyle.css'
import HomeAbout from '../../components/HomeAbout/HomeAbout'

const About = () => {
  return (
    <section className="">
      <div>
        <OthersHero title="About" hash="#" image={image} />
        <HomeAbout />
      </div>
    </section>
  )
}

export default About

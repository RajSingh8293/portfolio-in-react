import React from 'react'
import OthersHero from '../../OthersHero/OthersHero'
import HomeAbout from '../home/HomeAbout/HomeAbout'
import image from '../../../Images/services_img.jpg'

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

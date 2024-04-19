import React from 'react'
import profileImg from '../../assets/rajprofilepic.png'
import './Home.css'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import HomeContact from './HomeContact/HomeContact'
import OurServices from './OurServices/OurServices'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <>
      <div className="main">
        <div id="home" className="">
          <Hero
            heading="Hii there, It's"
            span=" Me"
            heading_2="Harvans Singh ( Raj )"
            image={profileImg}
            content="I am Harvans Singh (Raj) From Delhi, A newly web developer & Website Designer."
            intagram="www.instagram.com"
            facebook="www.facebook.com"
            twitter="www.twitter.com"
            linkdin="www.linkdin.com"
          />
        </div>

        <div id="about">
          <HomeAbout img={profileImg} />
        </div>

        <div id="services">
          <OurServices />
        </div>

        <div id="contact" className="">
          <HomeContact />
        </div>
      </div>
    </>
  )
}

export default Home

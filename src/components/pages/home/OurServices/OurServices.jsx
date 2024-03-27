import React from 'react'
import ServicesCard from './ServicesCard'
import frontendImg from '../../../../Images/frontend-icon.png'
import backendImg from '../../../../Images/backend-icon.png'
import uiuxImg from '../../../../Images/ui-ux-icon.png'
import Heading from '../../../Headings/Heading'

const Services = () => {
  return (
    <>
      <div className="services text-center px-10 py-10 mt-4 lg:w-[80%] w-[100%] mx-auto bg-#333333">
        <div className="heading ">
          <Heading heading="Our" span="Services" />
        </div>

        {/* <div className="cards mt-10 w-full flex justify-center gap-6"> */}
        <div className="relative cards mt-10 grid w-full gap-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div className="anim card_1">
            <ServicesCard Image={frontendImg} text="Frontend Developer" />
          </div>
          <div className="anim card_2">
            <ServicesCard Image={backendImg} text="Backend Developer" />
          </div>
          <div className="anim card_3">
            <ServicesCard Image={uiuxImg} text="UI/UX Developer" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services

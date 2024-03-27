import React from 'react'
import ContactMe from './ContactMe'
import Heading from '../../headings/Heading'
import OthersHero from '../../OthersHero/OthersHero'
import image from '../../../Images/services_img.jpg'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section>
      <div>
        <OthersHero title="Contact-Me" hash="#" image={image} />
      </div>

      <div className="px-10 pt-20 contact w-[100%] lg:w-[80%] md:w-[100%] sm:w-[100%] mx-auto  ">
        <Heading heading="Get In" span=" Touch" />
        <div className=" grid w-[100%] gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1   my-10">
          <ContactMe />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact

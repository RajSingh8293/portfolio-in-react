import React from 'react'
import Heading from '../../../components/Headings/Heading'
import Contactme from '../../Contacts/Contactme'
import Contactform from '../../Contacts/Contactform'

const HomeContact = () => {
  return (
    <div className="px-10 pt-16 contact w-[100%] lg:w-[80%] md:w-[100%] sm:w-[100%] mx-auto  ">
      <Heading heading="Get In" span=" Touch" />
      <div className=" grid w-[100%] gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1   my-10">
        <Contactme />
        <Contactform />
      </div>
    </div>
  )
}

export default HomeContact

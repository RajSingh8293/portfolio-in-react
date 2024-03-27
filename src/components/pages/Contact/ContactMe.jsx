import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const ContactMe = () => {
  return (
    <div className="flex w-[100%] py-5  text-white flex-col gap-6 rounded">
      <div className="flex items-center gap-8 ">
        <span>
          <IoLocationOutline className="w-[30px] h-[30px]" />
        </span>
        <span>
          <p>Delhi, India</p>
        </span>
      </div>
      <div className="flex items-center gap-8 ">
        <span>
          <MdOutlineMailOutline className="w-[30px] h-[30px]" />
        </span>
        <span>
          <NavLink to="https://mail.google.com/mail/u/0/#inbox">
            singhraj@gmail.com
          </NavLink>
        </span>
      </div>
      <div className="flex items-center gap-8 ">
        <span>
          <FaGithub className="w-[30px] h-[30px]" />
        </span>
        <span>
          <NavLink to="https://github.com/RajSingh8293">
            https://github.com/RajSingh8293
          </NavLink>
        </span>
      </div>
    </div>
  )
}

export default ContactMe

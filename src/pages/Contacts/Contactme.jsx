import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { NavLink } from 'react-router-dom'

const Contactme = () => {
  return (
    <div className="flex w-[100%] py-5  text-white flex-col gap-6 rounded">
      <div className="flex items-center gap-8 ">
        <span>
          <LocationOnIcon className="w-[30px] h-[30px]" />
        </span>
        <span>
          <p>Delhi, India</p>
        </span>
      </div>
      <div className="flex items-center gap-8 ">
        <span>
          <MailOutlineIcon className="w-[30px] h-[30px]" />
        </span>
        <span>
          <NavLink to="https://mail.google.com/mail/u/0/#inbox">
            singhraj@gmail.com
          </NavLink>
        </span>
      </div>
      <div className="flex items-center gap-8 ">
        <span>
          <GitHubIcon className="w-[30px] h-[30px]" />
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

export default Contactme

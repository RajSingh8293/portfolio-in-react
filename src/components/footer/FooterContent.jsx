import React, { useState } from 'react'
import FooterListTitle from './FooterListTitle'
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaYoutubeSquare,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const FooterContent = () => {
  const [subscription, setSubscription] = useState(false)
  const [emailInfo, setEmailInfo] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
  }

  const handleSubscription = () => {
    if (emailInfo === '') {
      setErrMsg('Please provide an Email !')
    } else if (!emailValidation(emailInfo)) {
      setErrMsg('Please give a valid Email!')
    } else {
      setSubscription(true)
      setErrMsg('')
      setEmailInfo('')
    }
  }

  const footerPageLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' },
  ]
  return (
    <div className="w-full bg-[#F5F5F3] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  xl:grid-cols-6 px-10 gap-10">
        <div className="col-span-2">
          <FooterListTitle title=" More about Harvans Singh" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
            <ul className="flex items-center gap-2 ">
              <a
                href="https://www.youtube.com/@learnsomethingwithraj1390/videos"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-black hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a
                href="https://github.com/RajSingh8293"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-black hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-black hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/harvans-singh-1a1076242"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-black hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="About-Me" />

          <ul className="flex flex-col gap-2">
            {footerPageLinks.map((data) => (
              <NavLink
                to={data.path}
                key={data.id}
                className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
              >
                {data.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div>
          <FooterListTitle title="Your account" />
          <div className="flex flex-col gap-2">
            <NavLink
              to="/profile"
              className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Profile
            </NavLink>
            <NavLink
              to="/profile"
              className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Addresses
            </NavLink>
            <NavLink
              to="/PortFolio"
              className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              PortFolio
            </NavLink>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <div>Subscribe to our newsletter</div>
          {/* <FooterListTitle title=" Subscribe to our newsletter" /> */}

          <div className="w-full">
            <p className="text-center mb-4">
              A at pellentesque et mattis porta enim elementum.
            </p>
            {subscription ? (
              <p className="w-full text-center text-base font-titleFont font-semibold text-green-600">
                Subscribed Successfully !
              </p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterContent

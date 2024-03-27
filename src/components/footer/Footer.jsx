import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutubeSquare,
} from 'react-icons/fa'
import FooterListTitle from './FooterListTitle'
import FooterBottom from './FooterBottom'
import FooterContent from './FooterContent'

const Footer = () => {
  return (
    <section>
      <FooterContent />
      <FooterBottom />
      
    </section>
  )
}

export default Footer

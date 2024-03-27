import React, { useState } from 'react'
import { IoMdArrowUp } from 'react-icons/io'

const TopArrow = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true)
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <IoMdArrowUp
      className="scrollTop text-black"
      onClick={scrollTop}
      style={{ display: showScroll ? 'flex' : 'none' }}
    />
  )
}

export default TopArrow

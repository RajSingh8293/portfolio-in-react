import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Footer from './components/footer/Footer'

import Home from './pages/Home/Home'
import Blogs from './pages/Blogs/Blogs'
import Skills from './pages/Skills/Skills'
import Nopage from './pages/Nopage/Nopage'
import BlogPartOne from './pages/Blogs/BlogPartOne'
import BlogPartTwo from './pages/Blogs/BlogPartTwo'
import Contact from './pages/Contacts/Contact'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import About from './pages/About/About'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-part-one" element={<BlogPartOne />} />
          <Route path="/blog-part-two" element={<BlogPartTwo />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

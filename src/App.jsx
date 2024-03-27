import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Footer from './components/footer/Footer'
import Home from './components/pages/home/Home'
import Skills from './components/pages/skills/Skills'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import Blogs from './components/pages/Blogs/Blogs'
import BlogPartOne from './components/pages/Blogs/BlogPartOne'
import BlogPartTwo from './components/pages/Blogs/BlogPartTwo'
import Nopage from './components/pages/Nopage/Nopage'
import Contact from './components/pages/contact/Contact'
import About from './components/pages/about/About'

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

import React from 'react'
import OthersHero from '../../components/OthersHero/OthersHero'

import image from '../../Images/services_img.jpg'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <section className="">
      <OthersHero title="Blogs" hash="#" image={image} />
      {/* blog cards */}
      <div className=" px-8">
        <BlogCard />
      </div>
    </section>
  )
}

export default Blogs

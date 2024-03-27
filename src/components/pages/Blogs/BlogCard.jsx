import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import GradeIcon from '@mui/icons-material/Grade'
import crudImg from '../../../Images/crud_api_image_2.jpg'
import { NavLink } from 'react-router-dom'

const BlogCard = () => {
  return (
    <section>
      <div className="py-10">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={crudImg} alt="Sunset in the mountains" />
          <div class="px-6 py-2">
            <div class="text-gray-200 text-xl mb-2">
              Crud API with Node.js, Express, and MongoDB with Authentication
            </div>
            <p class="text-gray-400 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex justify-between px-6 pt-4 pb-2">
            <div class="">
              <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">
                <FavoriteIcon className="text-white cursor-pointer" />
              </span>
              <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <ThumbUpIcon className="text-white cursor-pointer" />
              </span>
            </div>
            <div class="">
              <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
                <GradeIcon className="text-white cursor-pointer" />
                <GradeIcon className="text-white cursor-pointer" />
                <GradeIcon className="text-white cursor-pointer" />
                <GradeIcon className="text-white cursor-pointer" />
                <GradeIcon className="text-white cursor-pointer" />
              </span>
            </div>
          </div>

          <div class="px-6 pb-5 pt-3 text-right">
            <NavLink
              to="/blog-part-one"
              className="text-gray-200 border-2 py-1 px-3"
            >
              read more...
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogCard

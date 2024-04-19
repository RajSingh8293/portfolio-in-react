import React from 'react'
import Heading from '../../components/Heading/Heading'
import ServerCode from './ServerCode'
import { createUserController, modalSchema } from './BlogContent'
import image from '../../Images/services_img.jpg'
import OthersHero from '../../components/OthersHero/OthersHero'
import { NavLink } from 'react-router-dom'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const BlogPartTwo = () => {
  window.scroll(0, 0)
  return (
    <>
      <section className="">
        <OthersHero title="Part 2" hash="#" image={image} />
      </section>
      <section className="w-[100%] bg-white px-20">
        <div className="text-gray-600">
          {/* step 1 create forder crud_app_express */}

          <div className="">
            <h1 className="text-center text-5xl font-bold pt-8 pb-20">
              Part 2 Crud API with Node.js, <br /> Express, and MongoDB with
              Authentication
            </h1>

            <div>
              <div className="py-5">
                <Heading heading="Step 1: Create Mongoose Model and User Shema" />
              </div>
              <p>
                file name : <code>userSchema.js</code>
              </p>
              <ServerCode codeString={modalSchema} />
            </div>
          </div>
          <div>
            <h1 className="crud_heading py-4"></h1>
            <div className="py-5">
              <Heading heading="Step 2: Create the Controller" />
              <div className="py-4 pl-4">
                <ol>
                  <li>
                    Create User -{' '}
                    <span className="font-semibold">( POST )</span>
                  </li>
                  <li>
                    Find All User -{' '}
                    <span className="font-semibold"> ( GET )</span>
                  </li>
                  <li>
                    Find By Id User -{' '}
                    <span className="font-semibold"> ( GET )</span>
                  </li>
                  <li>
                    Update User -{' '}
                    <span className="font-semibold"> ( PUT )</span>
                  </li>
                  <li>
                    Delete User -{' '}
                    <span className="font-semibold"> ( DELETE )</span>
                  </li>
                </ol>
              </div>
            </div>
            <p>
              file name : <code>userContrllers.js</code>
            </p>
            <ServerCode codeString={createUserController} />
          </div>
        </div>
        <div className="py-8 flex justify-between">
          <button className="border-2 py-1 px-5 ">
            <NavLink to="/blog-part-one" className="flex items-center">
              <KeyboardArrowLeftIcon /> Go to <span>previews page</span>
            </NavLink>
          </button>
          <button className="border-2 py-1 px-5">
            <NavLink to="/blog-part-two" className="flex items-center">
              <span> Go to next page </span>
              <KeyboardArrowRightIcon />
            </NavLink>
          </button>
        </div>
      </section>
    </>
  )
}

export default BlogPartTwo

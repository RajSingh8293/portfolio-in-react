import React from 'react'
import { NavLink } from 'react-router-dom'
import Heading from '../../Heading/Heading'
import {
  cd,
  codeString,
  connecDb,
  data,
  db,
  installExpress,
  mkdir,
  npmInit,
  packageJson,
} from './BlogContent'
import ServerCode from './ServerCode'
import OthersHero from '../../OthersHero/OthersHero'
import image from '../../../Images/services_img.jpg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const BlogPartOne = () => {
  window.scroll(0, 0)
  return (
    <>
      <section className="">
        <OthersHero title="Part 1" hash="#" image={image} />
      </section>
      <section className="w-[100%] bg-white px-20">
        <div className="">
          <div className="text-gray-600 p-5">
            <h1 className="text-5xl font-bold pb-20 pt-8 text-center">
              Part 1 Crud API with Node.js, <br /> Express, and MongoDB with
              Authentication
            </h1>
            <div>
              <p>
                In this blog, we are going to build a simple CRUD (Create, Read,
                Update and Delete) app with the application of Node JS, Express
                JS, and MongoDB from the basics. Before we jump into the
                application, let’s look into the tools we are going to use.
              </p>
            </div>
            <div className="py-5">
              <p className=" pb-3">We are going to use following tools : </p>
              <p>
                <ol className="flex flex-col gap-2">
                  <li className="font-semibold">
                    {' '}
                    <NavLink to="https://www.npmjs.com/package/express">
                      Expressjs{' '}
                    </NavLink>
                  </li>
                  <li className="font-semibold">
                    {' '}
                    <NavLink to="https://www.npmjs.com/package/mongoose">
                      Mongoose{' '}
                    </NavLink>
                  </li>
                  <li className="font-semibold">
                    {' '}
                    <NavLink to="https://www.mongodb.com/">
                      MongoDb Database
                    </NavLink>
                  </li>
                </ol>
              </p>
            </div>

            <div className="pb-8">
              <p>
                <strong>CRUD</strong> is an acronym for Create, Read, Update and
                Delete. It is a set of operations we get servers to execute
                (POST, GET, PUT and DELETE requests respectively).
              </p>

              <p className="pt-3">This is what each operation does:</p>
              <ul className="pt-3 flex flex-col gap-2">
                <li className="flex gap-2 items-center">
                  <Heading heading="Create (POST)" />
                  <p>— Make/Create something</p>
                </li>
                <li className="flex gap-2 items-center">
                  <Heading heading="Read (GET)" />
                  <p>— Get something</p>
                </li>
                <li className="flex gap-2 items-center">
                  <Heading heading="Update (PUT)" />
                  <p>— Change/ Edit something</p>
                </li>
                <li className="flex gap-2 items-center">
                  <Heading heading="Delete (DELETE)" />
                  <p>— Remove something</p>
                </li>
              </ul>
            </div>
            {/* step 1 create forder crud_app_express */}
            <div>
              <h1 className="crud_heading py-4"></h1>
              <div className="py-5">
                <Heading heading="Step 1: Creating the Application" />
              </div>
              <ServerCode codeString={mkdir} />
            </div>

            {/* step 2 go to crud_app_express folder and run npm init  */}
            <div>
              <h1 className="crud_heading py-4"></h1>
              <div className="py-5">
                <Heading heading=" Step 2 : Go to crud_app_express folder and run npm init command :" />
              </div>
              <ServerCode codeString={cd} />
            </div>

            {/* after run npm init command  */}
            <div>
              <div className="py-5">
                <Heading heading="After running npm init command : " />
              </div>

              <ServerCode codeString={npmInit} />
            </div>

            {/*  step 3 install dependencis */}
            <div>
              <div className="pt-5">
                <Heading heading="Step 3: Install all neccessery dependencies" />
              </div>

              <p className="py-3">
                We need to install necessary modules:
                <span>
                  <code> express</code>
                </span>
                <span>
                  <code> mongoose </code>
                </span>
                <span>
                  <code> body-parser </code>
                </span>
                and
                <span>
                  <code> cors </code>
                </span>
                modules in our application file.
              </p>
              <p className="pb-2"> Run the command:</p>

              <div className="">
                <ServerCode codeString={installExpress} />
              </div>
            </div>

            {/* step 4 after installibg neccessery dependencis */}
            <div>
              <div className="py-5">
                <Heading
                  heading={`Step 4 : Our package.json file look like this :`}
                />
              </div>

              <ServerCode codeString={packageJson} />
            </div>

            {/* step 5 server setup  */}
            <div className="pt-5">
              <Heading heading="Step 5 : And now, We have to set up Server" />
              <div className="pt-5">
                <ServerCode codeString={codeString} />
              </div>
            </div>

            {/*  step 6 create folder database */}
            <div className="pt-5">
              <Heading heading="Step 6: Create a folder for connecting Database" />
              <p className="pt-2">
                And now, create a new folder with the name of
                <span>
                  <code> database </code>
                </span>
                in the root folder of our application and file name
                <span>
                  <code> conn.js </code>
                </span>
              </p>

              <div className=" w-[100%] rounded mt-5 ">
                <ServerCode codeString={data} />
              </div>
            </div>

            {/* step 7 connect db  */}
            <div className="pt-5">
              <Heading heading="Step 7 : Create a file name conn.js for connecting Datbase" />
              <p className="py-4">
                And now, Inside the <code>conn.js</code> write following code
                for database connection
              </p>
              <ServerCode codeString={db} />
            </div>

            {/* step 7 connect db  */}
            <div className="pt-5">
              <p className="py-4">
                Please run the server and make sure that you’re able to connect
                to the database
              </p>
              <ServerCode codeString={connecDb} />
            </div>
          </div>
        </div>
        <div className="py-8 text-right">
          <button className="border-2 py-1 px-5">
            <NavLink to="/blog-part-two">
              Go to next page <KeyboardArrowRightIcon />
            </NavLink>
          </button>
        </div>
      </section>
    </>
  )
}

export default BlogPartOne

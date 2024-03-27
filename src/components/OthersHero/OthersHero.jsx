import React from 'react'

const OthersHero = ({ title, hash, image }) => {
  return (
    <section>
      <div className="relative w-[100%] h-[400px] ">
        <img className="w-[100%] h-[100%] opacity-30" src={image} alt="" />
        <div className="flex justify-center  items-center">
          <h1 className=" absolute text-4xl  top-56 text-white  font-bold">
            <span className="text-green-400">{hash}</span>
            {title}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default OthersHero

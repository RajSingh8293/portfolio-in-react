import React from 'react'
const ServicesCard = ({ Image, text }) => {
  return (
    <div className="bg-[#333333] text-white card flex flex-col justify-center items-center  px-4 py-10 rounded-2xl ">
      <img src={Image} alt="frontend-image" className="w-[40px] py-3" />
      <h1 className="text-2xl font-semibold px-6">{text} </h1>
      <p className="text-sm py-3 px-5">
        I use HTML, CSS, JAVASCRIPT, Reactjs as a frontend web development
      </p>
      <button className="bg-green-400 py-2 px-3 rounded text-black my-3">
        See moree...
      </button>
    </div>
  )
}

export default ServicesCard

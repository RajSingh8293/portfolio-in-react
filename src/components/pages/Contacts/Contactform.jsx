import React from 'react'

const Contactform = () => {
  return (
    <div>
      <div className=" w-[100%] md:w-[100%]  lg:w-[100%] sm:w-[100%]">
        <form className="flex flex-col gap-6 ">
          <div className="input-field w-[100%] h-[20px]">
            <input
              className="h-[100%] w-[100%] p-4 rounded bg-slate-700 border-2 border-color-#fff outline-none"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="input-field w-[100%] h-[20px]">
            <input
              className="h-[100%] w-[100%] p-4 rounded  bg-slate-700 border-2 border-color-#fff outline-none"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="input-field w-[100%]">
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Your Message"
              className="rounded p-4 w-[100%] bg-slate-700 border-2 border-color-#fff outline-none"
            ></textarea>
          </div>
          <div className="text-left">
            <button
              type="submit"
              className="bg-green-400 py-2 px-3 w-[200px] rounded font-black text-black"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contactform

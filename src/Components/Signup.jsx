import React, { useState } from "react"
import "./Styles/Signup.css"
import OtherOptions from "./OtherOptions"
import { imageSrc } from "../../data"
import AuthToggle from "./AuthToggle"
import viteLogo from "/vite.svg"

const Signup = () => {
  const [userInput, setUserInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password1: "",
  })
  const [isToggle, setIsToggle] = useState(false)

  const changeHandler = (event) => {
    setUserInput(event.target)
  }

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  return (
    <div
      className="absolute bg-tertiary bg-opacity-50 w-screen h-screen 
          laptop:h-auto laptop:w-auto laptop:bg-opacity-0 laptop:relative"
    >
      <div className="flex flex-col items-center justify-center w-[400px] mt-28 laptop:hidden laptop:absolute laptop:top-0 z-50">
        <img
          src={viteLogo}
          alt=""
          className="w-[180px]"
        />
        {/* <h1 className="text-subHeadingText font-bold font-bodyFont text-primary">
          Router
        </h1> */}
        <span
          className="text-primary text-[10px] mt-3 font-medium font-bodyFont 
                  tracking-wider text-center"
        >
          {imageSrc.text}
        </span>
      </div>
      <h1
        className="text-primary text-subHeadingText font-medium font-headingFont 
             mt-20 laptop:mt-0 laptop:text-tertiary text-center "
      >
        Create account
      </h1>
      <OtherOptions />
      <form className="w-[400px] flex flex-col items-center justify-center mx-auto mt-5 rounded-lg ">
        <div className="form_child_container">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            value={userInput.firstname}
            onChange={changeHandler}
          />
        </div>
        <div className="form_child_container">
          <label htmlFor="firstname">Lastname</label>
          <input
            type="text"
            value={userInput.firstname}
            onChange={changeHandler}
          />
        </div>
        <div className="form_child_container">
          <label htmlFor="firstname">Email</label>
          <input
            type="email"
            value={userInput.firstname}
            onChange={changeHandler}
          />
        </div>
        <div className="form_child_container">
          <label htmlFor="firstname">Password</label>
          <input
            type="password"
            value={userInput.firstname}
            onChange={changeHandler}
          />
        </div>
      </form>
      <AuthToggle
        isToggle={isToggle}
        handleToggle={handleToggle}
      />
      <div className="w-[200px] mx-auto mt-5">
        <button
          className="bg-primary text-tertiary laptop:bg-tertiary h-[30px] w-[200px] rounded 
                  laptop:text-primary font-regular"
        >
          Sign up
        </button>
      </div>
    </div>
  )
}

export default Signup

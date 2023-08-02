import React, { useState } from "react"
import "./Styles/Signup.css"
import OtherOptions from "./OtherOptions"
import { imageSrc } from "../../data"
import AuthToggle from "./AuthToggle"
import viteLogo from "/vite.svg"
import axios from "axios"

const Signup = () => {
  const [userInput, setUserInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })
  const [isToggle, setIsToggle] = useState(false)

  const changeHandler = (event) => {
    const { name, value } = event.target
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }))
  }

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post("https://router-backend.onrender.com/user-details", userInput)
      .then((res) => {
        console.log(res.data)
        setUserInput(userInput)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div
      className="absolute bg-tertiary bg-opacity-30 w-screen h-screen 
          laptop:h-auto laptop:w-auto laptop:bg-opacity-0 laptop:relative"
    >
      <div className="flex flex-col items-center justify-center w-[400px] mt-7 laptop:hidden laptop:absolute laptop:top-0 z-50">
        <img
          src={viteLogo}
          alt=""
          className="w-[180px]"
        />
        {/* <h1 className="text-subHeadingText font-bold font-bodyFont text-primary">
          Router
        </h1> */}
        <span
          className="w-[300px] text-primary text-[10px] mt-2 font-medium font-bodyFont 
                  tracking-wider text-center"
        >
          {imageSrc.text}
        </span>
      </div>
      <h1
        className="text-primary text-subHeadingText font-medium font-headingFont 
             mt-5 laptop:mt-0 laptop:text-tertiary text-center "
      >
        Create account
      </h1>
      <OtherOptions />
      <form
        className="w-[400px] flex flex-col items-center justify-center mx-auto mt-5 rounded-lg "
        onSubmit={handleSubmit}
      >
        <div className="form_child_container">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            name="firstname"
            value={userInput.firstname}
            onChange={changeHandler}
          />
        </div>
        <div className="form_child_container">
          <label htmlFor="firstname">Lastname</label>
          <input
            type="text"
            name="lastname"
            value={userInput.lastname}
            onChange={changeHandler}
          />
        </div>
        <div className="form_child_container">
          <label htmlFor="firstname">Email</label>
          <input
            type="email"
            name="email"
            value={userInput.email}
            onChange={changeHandler}
          />
        </div>
        <div className="form_child_container">
          <label htmlFor="firstname">Password</label>
          <input
            type="password"
            name="password"
            value={userInput.password}
            onChange={changeHandler}
          />
        </div>
        <AuthToggle
          isToggle={isToggle}
          handleToggle={handleToggle}
        />
        <div className="w-[200px] mx-auto mt-5">
          <button
            type="submit"
            className="bg-primary text-tertiary laptop:bg-tertiary h-[30px] w-[200px] rounded 
                  laptop:text-primary font-regular"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup

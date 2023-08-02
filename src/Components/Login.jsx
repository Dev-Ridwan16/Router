import React, { useState } from "react"
import "./Styles/Signup.css"
import OtherOptions from "./OtherOptions"
import { imageSrc } from "../../data"
import viteLogo from "/vite.svg"
import AuthToggle from "./AuthToggle"
import axios from "axios"

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password1: "",
  })
  const [isToggle, setIsToggle] = useState(true)

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  const changeHandler = (event) => {
    const { name, value } = event.target
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post("https://router-backend.onrender.com/user-details/login", userInput)
      .then((res) => {
        const token = res.data.token

        localStorage.setItem("token", token)

        window.location.href = "/"
      })
      .catch((err) => {
        console.error("Login faild:", err.response.data.message)
      })
  }
  return (
    <div
      className="absolute bg-tertiary bg-opacity-50 w-screen h-screen 
          laptop:h-auto laptop:w-auto laptop:bg-opacity-0 laptop:relative"
    >
      <div className="flex flex-col items-center justify-center w-[400px] mt-10 laptop:hidden laptop:absolute laptop:top-0 z-50">
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
             mt-10 laptop:text-tertiary text-center "
      >
        Login your account
      </h1>
      <OtherOptions />
      <form
        onSubmit={handleSubmit}
        className="w-[400px] flex flex-col items-center justify-center mx-auto mt-5 rounded-lg "
      >
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
            name="password1"
            value={userInput.firstname}
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
            Log in
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login

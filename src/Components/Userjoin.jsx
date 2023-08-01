import React from "react"
import { imageSrc } from "../../data"
import viteLogo from "/vite.svg"
import Signup from "./Signup"
import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import { useLocation } from "react-router-dom"

const Userjoin = () => {
  const location = useLocation()

  const currentPath = location.pathname

  let form
  currentPath === "/login" ? (form = <Login />) : (form = <Signup />)
  return (
    <div className="flex flex-row items-center justify-center w-[800px] mx-auto bg-tertiary bg-opacity-10 rounded-lg">
      <div className="relative flex rounded-lg">
        <img
          src={imageSrc.image1}
          alt=""
          className="w-screen h-screen laptop:w-[400px] laptop:h-[500px] object-cover laptop:rounded-l-lg"
        />
        <div className="hidden laptop:block laptop:absolute top-0 z-50">
          <img
            src={viteLogo}
            alt=""
            className="w-[180px]"
          />
          <span className="text-primary text-bodyText font-medium font-bodyFont tracking-wider laptop:fixed laptop:w-[400px] mt-[380px] px-3">
            {imageSrc.text}
          </span>
        </div>
      </div>
      {form}
    </div>
  )
}

export default Userjoin

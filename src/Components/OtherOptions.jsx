import React from "react"
import { useLocation } from "react-router-dom"

const OtherOptions = () => {
  const location = useLocation()

  const currentPath = location.pathname

  let content
  currentPath === "/signup"
    ? (content = <span>Sign up</span>)
    : (content = <span>Sign in</span>)
  return (
    <div className="flex flex-col justify-center items-center text-bodyText font-bodyFont">
      <div className="bg-dark text-primary rounded-full w-[200px] text-center py-[3px] my-[10px]">
        {content} with Apple
      </div>
      <div>
        <div className="bg-primary text-dark rounded-full w-[200px] text-center py-[3px]">
          {content} with Google
        </div>
      </div>
    </div>
  )
}

export default OtherOptions

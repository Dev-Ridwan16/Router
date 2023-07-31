import React from "react"
import viteLogo from "/vite.svg"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center gap-16 h-[100vh]">
      <img
        src={viteLogo}
        alt=""
        className="w-[200px]"
      />
      <button
        onClick={() => navigate("signup")}
        className="bg-tertiary text-primary w-[150px] h-[40px] rounded-lg text-center text-bodyText font-bodyFont font-medium"
      >
        Get started
      </button>
    </div>
  )
}

export default Welcome

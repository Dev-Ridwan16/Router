import { useState } from "react"
import "./App.css"
import Userjoin from "./Components/Userjoin"
import Welcome from "./Components/Welcome"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Welcome />}
        />
        <Route
          path="/signup"
          element={
            <div className=" flex laptop:bg-tertiary h-screen laptop:bg-opacity-30 items-center justify-center">
              <Userjoin />
            </div>
          }
        />
        <Route
          path="/login" // Add this route for "/login" path
          element={
            <div className=" flex laptop:bg-tertiary h-screen laptop:bg-opacity-30 items-center justify-center">
              <Userjoin />
            </div>
          }
        />
      </Routes>
    </>
  )
}

export default App

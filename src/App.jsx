import React from "react"
import { Route, Routes, Navigate} from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import Search4Recipies from "./components/Search4Recipies"
import ErrorPage from './Pages/ErrorPage'
import Navbar from './components/Navbar'

function App() {
 
  return (
   <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/Search4Recipies" element={<Search4Recipies />} />
      </Routes>
  </>
   
  )
}

export default App

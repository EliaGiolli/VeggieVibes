import React from "react"
import { Route, Routes, Navigate} from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import ErrorPage from './Pages/ErrorPage'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Search4Recipies from "./components/Search4Recipies"
import Navbar from "./components/Navbar"
import RecipeDetails from './components/RecipiesCards'


function App() {
 
  return (
   <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/Navbar' element={<Navbar />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path="/Search4Recipies" element={<Search4Recipies />} />
        <Route path="/RecipiesCards/:id" element={<RecipeDetails />} />
      </Routes>
  </>
   
  )
}

export default App

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme"; // Assicurati che il percorso sia corretto
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ErrorPage from './Pages/ErrorPage';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Search4Recipies from "./components/cards/Search4Recipies";
import RecipeDetails from './components/cards/RecipiesCards';

function App() {
    const [themeMode,setThemeMode] = useState('light');

    const lightTheme = () => {
      setThemeMode('light');
    };

    const darkTheme = () => {
      setThemeMode('dark');
    };

    useEffect(() =>{
      document.querySelector('html').classList.remove('dark','light');
      document.querySelector('html').classList.add(themeMode);
    },[themeMode])

    return (
        <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path="/Search4Recipies" element={<Search4Recipies />} />
                <Route path="/RecipiesCards/:id" element={<RecipeDetails />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
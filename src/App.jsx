import React, {useEffect, useState} from "react"
import { ThemeProvider } from "./contexts/theme"
import ChangeBackground from "./components/ChangeBackground"
import Search4Recipies from "./components/Search4Recipies"

function App() {
  const [themeMode, setThemeMode] = useState("light")  

  const darkTheme = () => {
    setThemeMode("dark");
    console.log(themeMode)
  }
  
  const lightTheme = () => {
    setThemeMode("light")
    console.log(themeMode)
  }
  
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])
  
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <ChangeBackground />
      <Search4Recipies />
    </ThemeProvider>
  )
}

export default App

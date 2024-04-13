import React, {useEffect, useState} from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from "./contexts/theme"
import ChangeBackground from "./pages/ChangeBackground"
import Search4Recipies from "./pages/Search4Recipies"

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
      <Router>
        <Switch>
          <Route path="/" exact component={ChangeBackground} />
          <Route path="/" exact component={Search4Recipies} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App

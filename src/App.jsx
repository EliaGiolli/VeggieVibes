import React, {useState, createContext, useContext} from "react"
import ChangeBackground from "./components/ChangeBackground"
import Search4Recipies from "./components/Search4Recipies"

// Creare il contesto per il tema
const ThemeContext = createContext();

// Componente Provider del contesto del tema
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' o 'dark'

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  
 
  return (
    <ThemeProvider>
      <ChangeBackground />
      <Search4Recipies />
    </ ThemeProvider>
  )
}

export default App

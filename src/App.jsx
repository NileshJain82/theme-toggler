import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const [background,setBackground] = useState("#FFFFFF")
  const lightTheme = () => {

    setThemeMode("light")
    setBackground("#FFFFFF")
  }

  const darkTheme = () => {
    setThemeMode("dark")
    setBackground("#424242")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
    document.querySelector('body').style.backgroundColor = background

  }, [themeMode,background])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme,background,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
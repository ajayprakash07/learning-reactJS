import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import Card from './Card'
import { ThemeProvider } from './Theme'
import { useEffect, useState } from 'react'

function App() {

    const [themeMode, setThemeMode] = useState('light')

    const lightTheme =()=>{
        setThemeMode('light')
    }

    const darkTheme =()=>{
        setThemeMode('dark')
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("light","dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

  return (
    <UserContextProvider>
        <Login />
        <Profile />
        <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
            <Card />
        </ThemeProvider>
    </UserContextProvider>
  )
}

export default App
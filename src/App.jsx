import './App.css'
import { useEffect, useState } from 'react'
//import AppRouter from './routes/AppRouter'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Landing from './pages/Landing'

function App() {
    const [theme, setTheme] = useState("light")

    const body = document.getElementsByTagName("body")

    useEffect(() => {
        if (theme === "light"){
            body[0].style.backgroundColor = "hsl(0, 0%, 100%)"
        } else if(theme === "dark"){
            body[0].style.backgroundColor = "hsl(207, 26%, 17%)"
        }
    }, [theme])

    return (
        <>
        <Header 
            tema={theme} 
            selector={setTheme}
            />
        <Landing 
            tema={theme}/>
        <Footer
            tema={theme}
            />
        </>
    )
}

export default App
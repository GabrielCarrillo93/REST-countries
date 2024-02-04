import './App.css'
import { useEffect, useState } from 'react'
//import AppRouter from './routes/AppRouter'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Landing from './pages/Landing'
import Detalles from './pages/Detalles'

function App() {
    const [theme, setTheme] = useState("light")

    const body = document.getElementsByTagName("body")

    useEffect(() => {
        if (theme === "light"){
            body[0].className = theme
        } else if(theme === "dark"){
            body[0].className = theme
        }
    }, [theme])

    return (
        <>
        <Header 
            tema={theme} 
            selector={setTheme}
            />
        <Detalles />
        <Footer
            tema={theme}
            />
        </>
    )
}

export default App
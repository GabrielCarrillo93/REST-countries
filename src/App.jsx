import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'

function App() {
    const [theme, setTheme] = useState("light")

    return (
        <>
        <Header 
            tema={theme} 
            selector={setTheme}
            />
        </>
    )
}

export default App
import { useState } from 'react'
import './Header.css'
import { Icon } from "@iconify/react"

// eslint-disable-next-line react/prop-types
const Header = ({ tema, selector }) => {
    const [temaClaro, setTemaClaro] = useState(true)
    
    const handleSelector = () => {
        if (tema === "light"){
            selector("dark")
            setTemaClaro(false)
        } if (tema === "dark"){
            selector("light")
            setTemaClaro(true)
        }
    }

  return (
    <header
        className={tema}>
        <h1>Where in the world?</h1>

        <div
            className='toggler'
            onClick={handleSelector}>
            {temaClaro ? <Icon icon="ph:moon"/> : <Icon icon="ph:moon-fill"/>}
            <span>Dark Mode</span>
        </div>
    </header>
  )
}
export default Header
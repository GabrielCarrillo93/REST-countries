import { useState } from 'react'
import Filtros from '../components/Filtros/Filtros'
import Resultados from '../components/Resultados/Resultados'
import '../App.css'

// eslint-disable-next-line react/prop-types
const Landing = ( {tema} ) => {
    const [query, setQuery] = useState("")

    return (
        <main className={tema}>
            <Filtros 
                busqueda={setQuery}/>
            <Resultados 
                busqueda={query}
                />
        </main>
    )
}
export default Landing
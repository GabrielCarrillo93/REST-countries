import { Icon } from '@iconify/react';
import './Filtros.css'

// eslint-disable-next-line react/prop-types
const Filtros = ({busqueda}) => {
    const handleInputQuery = (e) => {
        const {target: {value}} = e;
        if (value) busqueda(value);
    }

    const handleSelectQuery = (e) => {
        const { target: {value} } = e;
        if (value) busqueda(value);
    }
    return (
        <section
            className='filtro'>
            <Icon 
                icon="material-symbols:search"
                className='icono'/>
            <input
                type="text"
                placeholder="Search for a country..."
                onChange={handleInputQuery}
                />
            <select 
                name="region" 
                id="region"
                onChange={handleSelectQuery}>
                <option value="all" selected>Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </section>
        )
    }

export default Filtros
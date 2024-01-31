import { Icon } from '@iconify/react';
import './Filtros.css'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Filtros = ({busqueda}) => {
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown)
    }
    const handleInputQuery = (e) => {
        const {target: {value}} = e;
        if (value) busqueda(value);
    }

    const handleSelectQuery = (e) => {
        const {target: {dataset}} = e;
        //const {target} = e
        console.log(dataset.region);
        if (dataset.region) busqueda(dataset.region)
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
            <div 
                className='select'
                onClick={handleDropdown}>
                    <div 
                        className='selector'>
                        <span>Filter by region</span>
                        <Icon 
                            icon="mdi:chevron-down"
                            className='icondrop'/>
                    </div>
                <div 
                    className={dropdown ? "dropdown" : "dropdown hide"}>
                    <ul
                        onClick={handleSelectQuery}>
                        <li data-region="all">All</li>
                        <li data-region="africa">Africa</li>
                        <li data-region="america">America</li>
                        <li data-region="asia">Asia</li>
                        <li data-region="europe">Europe</li>
                        <li data-region="oceania">Oceania</li>
                    </ul>
                </div>
            </div>
        </section>
        )
    }

export default Filtros
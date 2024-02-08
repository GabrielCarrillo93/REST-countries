import './CardPais.css'

const CardPais = () => {
    return (
        <article>
            <div className='bandera'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png" alt="bander_pais" />
                
            </div>
            <div
                className='info'>
                <h3 className='pais'>Argentina</h3>
                <div className='stats'>
                    <p><strong>Population: </strong>12345678</p>
                    <p><strong>Region: </strong>America</p>
                    <p><strong>Capital: </strong> Buenos Aires</p>
                </div>
            </div>
        </article>
    )
}
export default CardPais
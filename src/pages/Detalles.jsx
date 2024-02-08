import Boton from "../components/Boton/Boton"
import './Detalles.css'

const Detalles = () => {
    const accion = () => {
        console.log("click en el boton");
        }

    return (
        <main className="detalles">
            <div className="navigation">
                <Boton
                        action={accion}
                        icono="material-symbols:arrow-left-alt-rounded"
                        text="Back"/>
            </div>

            <div className="country">
                <div className="bandera">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png" alt="bandera"
                        />
                </div>

                <div className="infopais">
                    <div className="nombrepais">
                        <h2>Argentina</h2>
                    </div>
                    
                    <div className="stats">
                        <div className="statsizq">
                            <p><strong>Native Name: </strong> Argentina</p>
                            <p><strong>Population: </strong> 12345678</p>
                            <p><strong>Region: </strong> America</p>
                            <p><strong>Sub Region: </strong>South America</p>
                            <p><strong>Capital: </strong>Buenos Aires</p>
                        </div>
                        <div className="statsder">
                            <p><strong>Top Level Domain: </strong>.ar</p>
                            <p><strong>Currencies: </strong>Peso Argentino</p>
                            <p><strong>Languages: </strong>Spanish, English, German</p>
                        </div>
                    </div>
                
                    <div className="fronteras">
                        <h3>Border Countries:</h3>
                            <div className="links">
                                <Boton
                                    action={accion}
                                    text="Chile"/>
                                <Boton
                                    action={accion}
                                    text="Brasil"/>
                                <Boton
                                    action={accion}
                                    text="Uruguay"/>
                                <Boton
                                    action={accion}
                                    text="Bolivia"/>
                                <Boton
                                    action={accion}
                                    text="Paraguay"/>
                            </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
export default Detalles
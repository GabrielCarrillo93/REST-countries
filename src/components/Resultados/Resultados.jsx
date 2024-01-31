import CardPais from "../CardPais/CardPais"
import './Resultados.css'
// eslint-disable-next-line react/prop-types
const Resultados = ( {query} ) => {
    return (
        <section
            className="paises">
            <CardPais />
            <CardPais />
            <CardPais />
            <CardPais />
            <CardPais />
            <CardPais />
            <CardPais />
            <CardPais />
        </section>
    )
}
export default Resultados
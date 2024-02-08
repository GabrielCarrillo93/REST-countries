import { Icon } from '@iconify/react'
import './Boton.css'

// eslint-disable-next-line react/prop-types
const Boton = ( {text, icono , action} ) => {
  return (
    <button
        onClick={action}>
            {icono ? <Icon icon={icono}/> : ""}{text}
        </button>
  )
}
export default Boton
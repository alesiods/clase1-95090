//1)importamos el Hook:
import { useState } from "react"

const ItemCount = (props) => {

    //2)devolucion de array con dos elementos

    const [contador, setContador] = useState(1)

//3) crear dos funciones para incrementar y decrementar el contador

    const incrementar = () => {
        if(contador < props.stock) {
        setContador(contador + 1)
        }
    }

    const decremetar = () => {
        if(contador > 1) {
            setContador(contador - 1)
        }
    }

  return (
    <div>
        <button onClick={incrementar}> + </button>
        <p> {contador} </p>
        <button onClick={decremetar}> - </button>
    </div>
  )
}

export default ItemCount
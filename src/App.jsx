import './App.css'
import Boton from './componentes/Boton/Boton'

function App() {

  let nombre= "Alesio"
  

  return (
    <>
      <h1>Hola Mundoooooo!</h1>
      <h2 className='verde'>Esta es la primera clase de React</h2>
      <h3>Hola, soy el profe {nombre}</h3>
      <p>Tengo {30 + 4} años</p>
      <Boton/>
      <Boton></Boton>
    </>
  )
}

export default App

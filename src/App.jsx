import './App.css'
import Boton from './componentes/Boton/Boton'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal';
import ItemCount from './componentes/ItemCount/ItemCount';
import NavBar from './componentes/NavBar/NavBar';

function App() {

  let nombre= "Alesio"

  function saludo(){
    console.log("Holaaaa")
  }

  saludo()

  let cantidad = 8

  let colorFondo= {backgroundColor: "blue"}

  const celular = {
    marca: "Samsung",
    precio: 500000
  }
  

  return (
    <>
        {/* <h1 type="button" className="btn btn-danger">Hola chicos, bienvenidos, en la clase de hoy somos {cantidad}</h1>
        <h2 className='verde'>Esta es la primera clase de React</h2>
        <h3 style={colorFondo}>Hola, soy el profe {nombre}</h3>
        <h4 style={{color:"red"}}>hoy es 27 de mayo</h4>
        <p>Tengo {30 + 4} años</p>
        <Boton/>
        <Boton></Boton> 
        <TituloPrincipal saludo="Hola Comisión, esto es desestructuracion" producto={celular}/>
        <Boton texto="Comprar"/>
        <Boton texto="Eliminar"></Boton>
        <hr />
        <ItemCount stock= {15}/>
        <ItemCount stock= {20}/>*/}
        
        <NavBar/>
    </>
  )
}

export default App

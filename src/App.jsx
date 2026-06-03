import './App.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from './componentes/ItemCount/ItemCount';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
        <NavBar/>
        <ItemListContainer/>
    </>
  )
}

export default App

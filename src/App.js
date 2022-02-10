import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListCont/ItemListCont';

function App() {
  return (
    <>
      <div className='App'> 
      <NavbarComp />
        <div className='content'>
      <ItemListContainer title="Samsung S21+" sub= "Pantalla 6,7 / Octa Core / 12 MP + 64 MP + 12 MP cámara principal"/>
      <ItemListContainer title="Iphone 11 Pro 128GB" sub= "Pantalla 6,7 / Octa Core / 12 MP + 64 MP + 12 MP cámara principal"/>
      <ItemListContainer title="Xiaomi MI 11" sub= "Pantalla 6,7 / Octa Core / 12 MP + 64 MP + 12 MP cámara principal"/>
        </div>
      </div>
    </>
  );
}

export default App;



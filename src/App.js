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
      <ItemListContainer title="Bienvenido a REPLACE" sub="Tu proximo celular a un click"/>
        </div>
      </div>
    </>
  );
}

export default App;

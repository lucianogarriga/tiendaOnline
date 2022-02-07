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
      <ItemListContainer/>
        </div>
      </div>
    </>
  );
}

export default App;

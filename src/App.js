import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavBar/NavBar';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div className='App'> 
      <NavbarComp />
        <ItemListContainer/>      
      </div>
    </>
  );
}

export default App;



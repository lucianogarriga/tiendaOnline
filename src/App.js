import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavBar/NavBar';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      {/* <div className='App'>  */}
      <NavbarComp />
      <ItemListContainer greetings="Bienvenido a REPLACE"/>      
      {/* </div> */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;



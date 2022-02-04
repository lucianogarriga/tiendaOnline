import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <div className='App'> 
      <NavbarComp />
        <div className='content'>
        <p>Bienvenido</p>
        </div>
      </div>
    </>
  );
}

export default App;

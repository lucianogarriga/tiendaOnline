import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavBar/NavBar'; 
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/items/:id" element={<ItemDetailContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/lista-items/:itemName" element={<ItemDetail/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;



import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavBar/NavBar'; 
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from "./components/Cart/Cart" 
import {useState} from 'react'
import { CartProvider } from "./Context";

// import data from './components/Data/Data'

function App() {
  
  const [cartItems, setCartItems] = useState([])

  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/items/:id" element={<ItemDetailContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/lista-items/:itemName" element={<ItemDetail/>} />
        <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
        <Route path="/contexto" element={<CartProvider/>} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;



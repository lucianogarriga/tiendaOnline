import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavBar/NavBar';  
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from "./views/Cart";
import { CartProvider } from "./Context";
import { Home } from "./views/Home";
import { Category } from "./views/Category";
 

function App() {
   

  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>} /> 
        <Route path="/category/:categoryId/:categoryName" element={<Category/>} /> 
        <Route path="/cart" element={<Cart />}/>
        <Route path="/contexto" element={<CartProvider/>} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;



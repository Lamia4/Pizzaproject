import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./pages/About.jsx";
import Categories from "./components/Categories.js";
import Contact from "./pages/Contact.jsx"
import Login from "./pages/Login.jsx";
import Shopping from "./pages/Shopping";
import Register from "./pages/Register.jsx";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Category from "./pages/Category.js";
import CartProvider from "./components/CartProvider.js";


function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <main>
          <Nav/>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/categories" component={ Categories }/>
            <Route path="/contact" component={ Contact } />
            <Route path="/about" component={ About } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/shopping" component={ Shopping } /> 
            <Route path="/products/:categoryName" component={ Category } />         
          </Switch>
          </main>
          <Footer/>
      </BrowserRouter>
            </CartProvider>

    </div>
  );
}

export default App;
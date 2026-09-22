import { BrowserRouter, Routes, Route } from "react-router";

import About from "./pages/About";
import Catalog from './pages/Catalog';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path ='/' element={<Home />}/>
          <Route path ='/about' element={<About/>}/>
          <Route path ='/catalog' element={<Catalog/>}/>
          <Route path ='/contact' element={<Contact/>}/>
          <Route path ='*' element={<NotFound/>}/>
        </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
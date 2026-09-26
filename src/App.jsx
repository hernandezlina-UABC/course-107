import { BrowserRouter, Routes, Route } from "react-router";

import About from "./pages/About";
import Catalog from './pages/Catalog';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import GlobalProvider from "./state/globalProvider";
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <GlobalProvider>

      <BrowserRouter>
        <div className="App d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1 mx-4">

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/catalog' element={<Catalog />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <div className="justify-item-end">

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App;
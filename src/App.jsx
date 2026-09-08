import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Catalog from './pages/Catalog';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Catalog/>

      <main className="main-content">
        <h1>Welcome to Organika Store</h1>
        <p>Discover amazing products at incredible prices.</p>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
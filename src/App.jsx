import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Catalog from './pages/Catalog';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className="main-content">
        <h1>Welcome to Organika Store</h1>
      </main>
      <Catalog/>


      <Footer/>
    </div>
  );
}

export default App;
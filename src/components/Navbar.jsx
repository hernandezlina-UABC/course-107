import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>My Online Store</h1>
        </div>
        <ul className="navbar-nav">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#catalog" className="nav-link">Catalog</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
import { Link } from "react-router";
import { useContext } from "react";
import GlobalContext from "../state/globalContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"

function Navbar() {
  const user = useContext(GlobalContext).user
  return (
    <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
      <div className="container-fluid d-flex justify-content-between">
        <div className="d-flex justify-content-start">

          <a className="navbar-brand text-warning-emphasis font" href="#">Heritage Gold</a>
        <div>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            
            <ul className="navbar-nav">
              {/* Link is a component from react router dom library that help us with the page performance */}
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/catalog">Catalog</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
              </li>
            </ul>

          </div>
        </div>
        </div>


        <p className="text-white m-0">{user.name} - {user.id}</p>

      </div>
    </nav>
  );
}
export default Navbar;

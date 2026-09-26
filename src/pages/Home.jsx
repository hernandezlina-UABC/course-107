import { Link } from "react-router";
import "./Home.css";

function Home() {
  return (
    <header className="masthead">
      <div className="container pb-5">
        <div className="card-title text-uppercase mx-5 mb-4">Jewelry Crafted for Generations.</div>
        <div className="card-text font mx-5 mb-4">Discover timeless designs forged in solid 18-karat gold and
          illuminated by ethically sourced, conflict-free diamonds.</div>
        <Link className="btn btn-primary btn-xl text-uppercase mx-5 mb-4" to='/catalog'>Explore the collection</Link>
      </div>
    </header>
  );
}
export default Home;

import { Link } from "react-router";
import "./Home.css";

function Home() {
    return (
      <header className="masthead">
        <div className="container ">
            <div className="masthead-subheading">Jewelry Crafted for Generations.</div>
            <div className="masthead-heading font text-uppercase">Discover timeless designs forged in solid 18-karat gold and
            illuminated by ethically sourced, conflict-free diamonds.</div>
            <Link className="btn btn-primary btn-xl text-uppercase" to ='/catalog'>Explore the collection</Link>
        </div>
    </header>
  );
}
export default Home;

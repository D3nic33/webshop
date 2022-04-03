import { Link } from "react-router-dom";
import "../Style/Components/Header.scss"

export default function Home() {
  return (
    <div className="header-body">
      <Link to="/" className="header-title">
        <h1>Enicy</h1>
      </Link>
      <div className="header-links">
        <Link className="link" to="/women">Dames</Link>
        <Link className="link" to="/men">Heren</Link>
        <Link className="link" to="/kids">Kinderen</Link>
        <Link className="link" to="/sale">Sale</Link>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";
import "../Style/Components/Header.scss"

export default function Home() {
  return (
    <div className="header-body">
      <div className="header-title">
        <h1>Enicy</h1>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
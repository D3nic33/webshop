import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render(){
    return (
      <div className="flex flex-col pt-6">
        <Link to="/" className="text-center text-2xl">
          <h1>Enicy</h1>
        </Link>
        <div className="flex flex-row justify-center py-5 text-lg">
          <Link className="px-3" to="/women">Dames</Link>
          <Link className="px-3" to="/men">Heren</Link>
          <Link className="px-3" to="/kids">Kinderen</Link>
          <Link className="px-3" to="/sale">Sale</Link>
        </div>
      </div>
    );
  }
}

export default Header;
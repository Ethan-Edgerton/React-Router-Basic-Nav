import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          {/* Link is making an anchor/link and sending you to wherever to= when clicked */}
          <Link to="/" href="">
            Home
          </Link>
        </div>
        <div>
          <Link to="/about" href="">
            About
          </Link>
        </div>
        <div>
          <Link to="/contact" href="">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

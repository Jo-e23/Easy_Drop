import React from 'react';
import  {Link} from 'react-router'
const Navbar = () => {
  return (
    <div style={{ minWidth: "100vw", display: "flex", flexDirection: "column" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">EasyDrop</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
              <Link to="home"className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="about"className="nav-link">About</Link>
              </li>
              
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
              </button>
              {/* <button className="btn btn-outline-dark" type="submit">
                <i className=""></i>
                <Login/>Login
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
